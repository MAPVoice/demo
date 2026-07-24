#!/bin/sh

set -eu

fail() {
  printf 'Release check failed: %s\n' "$1" >&2
  exit 1
}

tracked_files=$(git ls-files)

printf '%s\n' "$tracked_files" | grep -E '(^|/)(\.DS_Store|Thumbs\.db)$' >/dev/null &&
  fail "OS metadata is tracked."

git grep -InE '/Users/|/home/|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}' -- \
  . ':(exclude)scripts/check-release.sh' >/dev/null &&
  fail "A local path or email address appears in tracked content."

git grep -InE 'github\.com/[A-Za-z0-9-]+|github\.io/[A-Za-z0-9-]+' -- \
  . ':(exclude)README.md' >/dev/null &&
  fail "A GitHub account URL appears in public page content."

git log --format='%an <%ae>' |
  grep -vE '^MAPVoice Demo <mapvoice-demo@users\.noreply\.github\.com>$' >/dev/null &&
  fail "Git history contains a non-release author identity."

printf 'Release check passed.\n'
