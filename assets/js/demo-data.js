window.DEMO_DATA = {
  "systems": [
    {
      "key": "gt",
      "label": "Ground Truth"
    },
    {
      "key": "cosyvoice3",
      "label": "CosyVoice 3"
    },
    {
      "key": "qwen06b",
      "label": "Qwen3-TTS-0.6B"
    },
    {
      "key": "qwen17b",
      "label": "Qwen3-TTS-1.7B"
    },
    {
      "key": "peftTts",
      "label": "PEFT-TTS"
    },
    {
      "key": "zipvoiceScratch",
      "label": "ZipVoice (From scratch)"
    },
    {
      "key": "zipvoiceFull",
      "label": "ZipVoice (Full fine-tuning)"
    },
    {
      "key": "mapvoice700h",
      "label": "MAPVoice 700h",
      "highlight": true
    },
    {
      "key": "mapvoice2000h",
      "label": "MAPVoice 2000h",
      "highlight": true
    },
    {
      "key": "distill700h",
      "label": "MAPVoice-Distill 700h",
      "highlight": true
    },
    {
      "key": "distill2000h",
      "label": "MAPVoice-Distill 2000h",
      "highlight": true
    }
  ],
  "comparison": [
    {
      "id": "UTT_001",
      "subset": "clean",
      "referenceText": "표준점수는 원점수가 평균 성적으로부터 얼마나 떨어졌는지 나타내는 점수다.",
      "targetText": "수사권 조정 논의에서 정부의 시간은 가고, 이제 국회의 시간이 왔습니다.",
      "reference": "assets/audio/mos/references/utt_001.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_001.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_001.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_001.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_001.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_001.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_001.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_001.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_001.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_001.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_001.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_001.wav"
      }
    },
    {
      "id": "UTT_002",
      "subset": "clean",
      "referenceText": "태평양사령부의 이름을 인도 태평양사령부로 바꾼다고 선언하며 중국 견제의 중장기 포석까지 마련했다.",
      "targetText": "중미 간에 벌어진 지적재산권 협상 중 당시 미측 대표가 중재에 나섰어요.",
      "reference": "assets/audio/mos/references/utt_002.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_002.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_002.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_002.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_002.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_002.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_002.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_002.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_002.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_002.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_002.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_002.wav"
      }
    },
    {
      "id": "UTT_003",
      "subset": "clean",
      "referenceText": "미국 정부 당국자와 핵 전문가들은 눈 앞의 광경에 아연실색했다.",
      "targetText": "주한미군 무용론을 불러 미군 감축 철수로 이어질 수 있다는 지적이다.",
      "reference": "assets/audio/mos/references/utt_003.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_003.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_003.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_003.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_003.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_003.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_003.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_003.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_003.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_003.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_003.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_003.wav"
      }
    },
    {
      "id": "UTT_004",
      "subset": "clean",
      "referenceText": "해외 직판 전문기업 주식회사 티쿤 글로벌이 서울시로부터 수출 우수 기업 표창장을 수여받았다.",
      "targetText": "계란프라이, 계란말이, 계란찜, 계란볶음밥, 계란국, 계란덮밥 등 수없이 많아요.",
      "reference": "assets/audio/mos/references/utt_004.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_004.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_004.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_004.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_004.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_004.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_004.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_004.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_004.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_004.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_004.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_004.wav"
      }
    },
    {
      "id": "UTT_005",
      "subset": "clean",
      "referenceText": "그 소설은 아버지를 죽인 원수에 대한 복수의 감정을 안고 평생을 고통스럽게 사는 주인공에 대한 이야기이다.",
      "targetText": "중국 바둑대회에서도 이미 자국 에이아이 프로그램인 줴이가 형세 판단을 하고 있다.",
      "reference": "assets/audio/mos/references/utt_005.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_005.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_005.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_005.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_005.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_005.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_005.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_005.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_005.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_005.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_005.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_005.wav"
      }
    },
    {
      "id": "UTT_006",
      "subset": "clean",
      "referenceText": "이 과정에서 노조의 반발로 성과 연봉제 도입 당시의 진통이 재연될 수 있다.",
      "targetText": "한 영국군 병사가 교통호에서 가스탄에 부상 당한 동료 병사를 업고 가는 장면이다.",
      "reference": "assets/audio/mos/references/utt_006.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_006.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_006.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_006.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_006.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_006.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_006.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_006.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_006.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_006.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_006.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_006.wav"
      }
    },
    {
      "id": "UTT_007",
      "subset": "clean",
      "referenceText": "정부가 이제라도 공공기관 비효율의 대명사인 호봉제 폐지에 나선 것은 옳은 방향이다.",
      "targetText": "한국이 대기업과 조화를 맞추기 위해 중소기업을 지원하는 것은 아주 합리적인 결정이다.",
      "reference": "assets/audio/mos/references/utt_007.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_007.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_007.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_007.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_007.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_007.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_007.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_007.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_007.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_007.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_007.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_007.wav"
      }
    },
    {
      "id": "UTT_008",
      "subset": "clean",
      "referenceText": "등급심사의 기준이 되는 평가점 중 입상점 산정방식이 변경된 데 따른 것으로 보인다.",
      "targetText": "이 책은 고전을 청소년들의 눈높이에 알맞게 개작하여 그들이 거부감을 갖지 않고 쉽게 읽을 수 있다.",
      "reference": "assets/audio/mos/references/utt_008.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_008.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_008.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_008.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_008.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_008.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_008.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_008.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_008.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_008.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_008.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_008.wav"
      }
    },
    {
      "id": "UTT_009",
      "subset": "clean",
      "referenceText": "소방당국은 진화 작업과 인명 수색이 끝나는 대로 정확한 화재 원인을 조사할 방침이다.",
      "targetText": "세계 최강의 경쟁력을 가진 업종들을 살펴보면 그 뿌리가 제법 길고 튼튼하다.",
      "reference": "assets/audio/mos/references/utt_009.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_009.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_009.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_009.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_009.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_009.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_009.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_009.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_009.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_009.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_009.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_009.wav"
      }
    },
    {
      "id": "UTT_010",
      "subset": "clean",
      "referenceText": "대통령 비서실장을 보좌해 온 비서실장실 선임행정관이 의전비서관을 맡는다.",
      "targetText": "참고로 예약 번호 모르셔도 콘도에서 간단한 신분 확인하시면 이용하실 수 있습니다.",
      "reference": "assets/audio/mos/references/utt_010.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_010.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_010.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_010.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_010.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_010.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_010.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_010.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_010.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_010.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_010.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_010.wav"
      }
    },
    {
      "id": "UTT_011",
      "subset": "noisy",
      "referenceText": "자기 책임을 다하고 이런 거에 대해서 잘 느꼈으면 좋겠어요.",
      "targetText": "그때 노력은 나이들어선 선 못해요. 젊었을 때 많이 배우고 더 전문가가 되기 위해서 노력을 많이 해야 된다.",
      "reference": "assets/audio/mos/references/utt_011.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_011.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_011.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_011.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_011.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_011.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_011.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_011.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_011.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_011.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_011.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_011.wav"
      }
    },
    {
      "id": "UTT_012",
      "subset": "noisy",
      "referenceText": "그때 노력은 나이들어선 선 못해요. 젊었을 때 많이 배우고 더 전문가가 되기 위해서 노력을 많이 해야 된다.",
      "targetText": "자기 책임을 다하고 이런 거에 대해서 잘 느꼈으면 좋겠어요.",
      "reference": "assets/audio/mos/references/utt_012.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_012.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_012.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_012.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_012.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_012.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_012.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_012.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_012.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_012.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_012.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_012.wav"
      }
    },
    {
      "id": "UTT_013",
      "subset": "noisy",
      "referenceText": "아니요 비슷해요. 젊은 친구들은 잡을 얻어서 하다가 예를 들어 겨울 스포츠를 즐긴다고 회사를 그만 두고 뭐 안 나오는 친구들도 있고. 내 거가 아니어도 내가 일하는 데는 내 거 같이 일하는 그런 느낌이 있었는데 그런 게 없는 게 조금 안 좋아요.",
      "targetText": "저도 아이가 있지만 우리 큰 아들한테 항상 그런 얘기를 하죠. 워라밀도 좋지만 너희가 충실했을 때 그것도 찾아라.",
      "reference": "assets/audio/mos/references/utt_013.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_013.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_013.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_013.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_013.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_013.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_013.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_013.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_013.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_013.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_013.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_013.wav"
      }
    },
    {
      "id": "UTT_014",
      "subset": "noisy",
      "referenceText": "저도 아이가 있지만 우리 큰 아들한테 항상 그런 얘기를 하죠. 워라밀도 좋지만 너희가 충실했을 때 그것도 찾아라.",
      "targetText": "아니요 비슷해요. 젊은 친구들은 잡을 얻어서 하다가 예를 들어 겨울 스포츠를 즐긴다고 회사를 그만 두고 뭐 안 나오는 친구들도 있고. 내 거가 아니어도 내가 일하는 데는 내 거 같이 일하는 그런 느낌이 있었는데 그런 게 없는 게 조금 안 좋아요.",
      "reference": "assets/audio/mos/references/utt_014.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_014.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_014.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_014.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_014.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_014.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_014.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_014.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_014.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_014.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_014.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_014.wav"
      }
    },
    {
      "id": "UTT_015",
      "subset": "noisy",
      "referenceText": "불안정한 게 느껴지는 부분들 때문인 것 같습니다. 경제 빈부 격차나? 이런 것들도 있는 것 같고 사회적인 부분들 때문에 서로",
      "targetText": "그런 경쟁 의식. 잘하고 싶고 최고가 되고 싶고 한데 자신이 없는 것 같은. 그냥 다 하나의 기준에 다 쫓아가는 그런 것 같이 느껴져서 저는 외국에서 살다온 입장에서 라고 생각하게 되었어요.",
      "reference": "assets/audio/mos/references/utt_015.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_015.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_015.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_015.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_015.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_015.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_015.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_015.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_015.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_015.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_015.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_015.wav"
      }
    },
    {
      "id": "UTT_016",
      "subset": "numeric",
      "referenceText": "이 때문에 수천 명의 체류객이 발생했지만 큰 혼란 없이 심야 시간 체류객 문제를 해결할 수 있었습니다.",
      "targetText": "전주지방법원은 명예훼손 혐의로 기소된 43살 A 씨와 A 씨의 형 48살 B 씨에게 각각 벌금 100 만 원을 선고했다고 밝혔습니다.",
      "reference": "assets/audio/mos/references/utt_016.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_016.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_016.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_016.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_016.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_016.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_016.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_016.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_016.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_016.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_016.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_016.wav"
      }
    },
    {
      "id": "UTT_017",
      "subset": "numeric",
      "referenceText": "경찰관들은 그 마음이 너무도 고마워서 자그마한 선물을 전했고요.",
      "targetText": "한국교원단체총연합회는 오늘 오전 기자회견을 열고 전국 초, 중등 교사 1600여 명을 대상으로 조사한 결과, 교장공모제가 불공정하다는 응답은 80.8％로 집계됐다고 밝혔습니다.",
      "reference": "assets/audio/mos/references/utt_017.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_017.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_017.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_017.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_017.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_017.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_017.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_017.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_017.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_017.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_017.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_017.wav"
      }
    },
    {
      "id": "UTT_018",
      "subset": "numeric",
      "referenceText": "학부모들은 서울시교육청이 국제중 폐지라는 답을 이미 정해두고 공정한 평가절차를 무시한 채 지정 취소 처분을 결정했다며, 교육부가 무너진 공정성을 바로잡아달라고 촉구했습니다.",
      "targetText": "국회 교육위 소속 더불어민주당 안민석 의원이 교육부에서 받은 자료를 보면, 전국 초중고의 28% 인 40,439 학급이 과밀학급이었습니다.",
      "reference": "assets/audio/mos/references/utt_018.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_018.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_018.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_018.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_018.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_018.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_018.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_018.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_018.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_018.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_018.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_018.wav"
      }
    },
    {
      "id": "UTT_019",
      "subset": "numeric",
      "referenceText": "이번 사건으로 피해자는 얼굴과 머리 등을 다쳐 병원에 입원했습니다.",
      "targetText": "앞선 8차 전원회의에서 공익위원은 심의 촉진 구간으로 8,620원 에서 9,110원을 제시했고, 이를 토대로 근로자위원은 올해보다 520원 오른 9,110원, 사용자위원은 45원 오른 8,635원의 수정안을 제시한 뒤 협의를 진행하고 있는 것으로 알려졌습니다.",
      "reference": "assets/audio/mos/references/utt_019.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_019.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_019.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_019.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_019.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_019.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_019.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_019.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_019.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_019.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_019.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_019.wav"
      }
    },
    {
      "id": "UTT_020",
      "subset": "numeric",
      "referenceText": "오늘에 이어 내일도 맑은 하늘이 함께 합니다.",
      "targetText": "2015 시즌 후 성남 FC로 옮긴 티아고는  K 리그 2016 시즌 전반기 동안 19 경기에 출전해 13 득점 5 도움의 뛰어난 기록으로 자신의 능력을 입증하며 그해 여름 사우디아라비아 명문클럽 알 힐랄의 러브콜을 받고 이적했습니다.",
      "reference": "assets/audio/mos/references/utt_020.wav",
      "audio": {
        "gt": "assets/audio/mos/ground_truth/utt_020.wav",
        "cosyvoice3": "assets/audio/mos/cosyvoice3/utt_020.wav",
        "qwen06b": "assets/audio/mos/qwen3_tts_0_6b/utt_020.wav",
        "qwen17b": "assets/audio/mos/qwen3_tts_1_7b/utt_020.wav",
        "peftTts": "assets/audio/mos/peft_tts/utt_020.wav",
        "zipvoiceScratch": "assets/audio/mos/zipvoice_scratch/utt_020.wav",
        "zipvoiceFull": "assets/audio/mos/zipvoice_full_finetuning/utt_020.wav",
        "mapvoice700h": "assets/audio/mos/mapvoice_700h/utt_020.wav",
        "mapvoice2000h": "assets/audio/mos/mapvoice_2000h/utt_020.wav",
        "distill700h": "assets/audio/mos/mapvoice_distill_700h/utt_020.wav",
        "distill2000h": "assets/audio/mos/mapvoice_distill_2000h/utt_020.wav"
      }
    }
  ],
  "flowSystems": [
    {
      "key": "mapvoiceFull",
      "label": "MAPVoice",
      "group": "Full-parameter"
    },
    {
      "key": "distillFull",
      "label": "MAPVoice-Distill (Full)",
      "group": "Full-parameter",
      "highlight": true
    },
    {
      "key": "mapvoicePeft",
      "label": "MAPVoice",
      "group": "Parameter-efficient"
    },
    {
      "key": "distillPeft",
      "label": "MAPVoice-Distill (PEFT)",
      "group": "Parameter-efficient",
      "highlight": true
    }
  ],
  "flowSteps": [2, 4, 8, 16],
  "flowAcceleration": []
};
