window.NEURIPS_DEMO_DATA = {
  "summary": {
    "schema_version": "1.0.0",
    "project_title": "NeurIPS Review-Guided Trend Mining",
    "subtitle": "Accepted-corpus topic trends, review signals, and representative-paper validation for NeurIPS 2023–2025",
    "conference": "NeurIPS",
    "years": [
      2023,
      2024,
      2025
    ],
    "public_records_total": 13171,
    "accepted_papers_total": 12539,
    "accepted_by_year": {
      "2023": 3218,
      "2024": 4035,
      "2025": 5286
    },
    "public_rejected_total": 632,
    "topics_total": 56,
    "selected_model": {
      "family": "BERTopic",
      "embedding_model": "all-MiniLM-L6-v2",
      "seed": 42,
      "umap_n_neighbors": 15,
      "umap_n_components": 10,
      "hdbscan_min_cluster_size": 30,
      "hdbscan_min_samples": 10,
      "outlier_reduction": true
    },
    "headline_finding": {
      "pearson_r": -0.3842606932307198,
      "pearson_p": 0.0034573384739652,
      "spearman_rho": -0.4713602187286398,
      "spearman_p": 0.0002455730918931,
      "controlled_coef_rating": -5.902756122900096,
      "bootstrap_ci": [
        -8.725127395367245,
        -2.780386394574995
      ]
    },
    "validity_banner_title": "Accepted-corpus analysis only — not topic acceptance rates",
    "validity_banner_text": "Public rejected NeurIPS submissions on OpenReview are incomplete because rejected authors may choose whether to make papers and reviews public. This dashboard analyzes accepted-paper share, not acceptance probability.",
    "repo_url": "https://github.com/tuandebu/Data_mining",
    "hf_dataset_url": "https://huggingface.co/datasets/tuandebu/data_mining/tree/main",
    "report_pdf_url": "./report/Trend.pdf",
    "downloads": {
      "topic_statistics_csv": "./downloads/topic_statistics.csv",
      "representatives_csv": "./downloads/representative_papers.csv",
      "correlation_results_csv": "./downloads/correlation_results.csv",
      "regression_results_csv": "./downloads/regression_results.csv",
      "transition_results_csv": "./downloads/transition_level_results.csv",
      "checksums_txt": "./checksums/server_result_checksums.txt"
    },
    "generated_at": "2026-06-09",
    "data_sha256": "see checksums/server_result_checksums.txt"
  },
  "topics": {
    "topics": [
      {
        "topic_id": 8,
        "raw_label": "8_reasoning_llms_language_to",
        "label": "LLM reasoning",
        "size_total": 486,
        "keywords": [
          "reasoning",
          "llms",
          "language"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.7713,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.8253,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 5.9591,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 1.054,
        "delta_24_25_pct_points": 3.1339,
        "delta_23_25_pct_points": 4.1879,
        "z_rating": 0.0491,
        "avg_rating": 4.9202,
        "prestige_concentration": 0.1584,
        "trajectory_type": "consistent growth",
        "interpretation": "Late-window acceleration: grows in both intervals and jumps most strongly from 2024 to 2025."
      },
      {
        "topic_id": 1,
        "raw_label": "1_3d_and_scene_to",
        "label": "3D vision / scene generation",
        "size_total": 882,
        "keywords": [
          "3d",
          "vision",
          "scene",
          "generation"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 5.2828,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 7.7076,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 7.5861,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 2.4248,
        "delta_24_25_pct_points": -0.1215,
        "delta_23_25_pct_points": 2.3033,
        "z_rating": -0.1019,
        "avg_rating": 5.0405,
        "prestige_concentration": 0.119,
        "trajectory_type": "spike then reversal",
        "interpretation": "Early expansion followed by plateau: large 2023→2024 gain, then slight decline in 2025."
      },
      {
        "topic_id": 14,
        "raw_label": "14_preference_reward_alignment_human",
        "label": "preference learning / alignment",
        "size_total": 200,
        "keywords": [
          "preference",
          "reward",
          "alignment",
          "human"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.4351,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.0074,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.9864,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 1.5724,
        "delta_24_25_pct_points": -0.0211,
        "delta_23_25_pct_points": 1.5513,
        "z_rating": 0.029,
        "avg_rating": 5.0824,
        "prestige_concentration": 0.135,
        "trajectory_type": "early growth / plateau",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 23,
        "raw_label": "23_safety_llms_harmful_attacks",
        "label": "LLM safety / jailbreaks",
        "size_total": 149,
        "keywords": [
          "safety",
          "llms",
          "harmful",
          "attacks"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.2175,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.2144,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.7594,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.9968,
        "delta_24_25_pct_points": 0.545,
        "delta_23_25_pct_points": 1.5418,
        "z_rating": -0.0229,
        "avg_rating": 4.8849,
        "prestige_concentration": 0.0738,
        "trajectory_type": "consistent growth",
        "interpretation": "Emerging LLM-centered topic with consistent growth across both intervals."
      },
      {
        "topic_id": 22,
        "raw_label": "22_attention_memory_kv_cache",
        "label": "efficient attention / KV cache",
        "size_total": 252,
        "keywords": [
          "attention",
          "memory",
          "cache"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.3984,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.6853,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 2.6296,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.2869,
        "delta_24_25_pct_points": 0.9443,
        "delta_23_25_pct_points": 1.2312,
        "z_rating": 0.0962,
        "avg_rating": 5.109,
        "prestige_concentration": 0.1468,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 21,
        "raw_label": "21_video_temporal_understanding_and",
        "label": "video temporal understanding",
        "size_total": 173,
        "keywords": [
          "video",
          "temporal",
          "understanding"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.839,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.0905,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.9296,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.2514,
        "delta_24_25_pct_points": 0.8392,
        "delta_23_25_pct_points": 1.0906,
        "z_rating": -0.0805,
        "avg_rating": 4.8686,
        "prestige_concentration": 0.1329,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 37,
        "raw_label": "37_lora_finetuning_lowrank_adaptation",
        "label": "LoRA / low-rank finetuning",
        "size_total": 118,
        "keywords": [
          "lora",
          "finetuning",
          "lowrank",
          "adaptation"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.3108,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.917,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.3432,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.6062,
        "delta_24_25_pct_points": 0.4262,
        "delta_23_25_pct_points": 1.0324,
        "z_rating": 0.0042,
        "avg_rating": 4.9316,
        "prestige_concentration": 0.1441,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 46,
        "raw_label": "46_language_llms_of_the",
        "label": "language LLMs of the",
        "size_total": 252,
        "keywords": [
          "language",
          "llms"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.4916,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.057,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 2.2891,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.5654,
        "delta_24_25_pct_points": 0.2321,
        "delta_23_25_pct_points": 0.7975,
        "z_rating": 0.1315,
        "avg_rating": 5.2532,
        "prestige_concentration": 0.1389,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 36,
        "raw_label": "36_agents_llms_agent_language",
        "label": "agents LLMs agent language",
        "size_total": 196,
        "keywords": [
          "agents",
          "llms",
          "agent",
          "language"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.1187,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.5118,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.8729,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.3931,
        "delta_24_25_pct_points": 0.3611,
        "delta_23_25_pct_points": 0.7542,
        "z_rating": 0.0539,
        "avg_rating": 5.1555,
        "prestige_concentration": 0.1531,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 20,
        "raw_label": "20_vision_tokens_and_the",
        "label": "vision tokens and the",
        "size_total": 278,
        "keywords": [
          "vision",
          "tokens"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.6781,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.5031,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 2.3269,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.825,
        "delta_24_25_pct_points": -0.1762,
        "delta_23_25_pct_points": 0.6488,
        "z_rating": -0.0396,
        "avg_rating": 5.121,
        "prestige_concentration": 0.0971,
        "trajectory_type": "spike then reversal",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 3,
        "raw_label": "3_multimodal_visual_and_to",
        "label": "multimodal visual and to",
        "size_total": 922,
        "keywords": [
          "multimodal",
          "visual"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 6.9608,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 7.3854,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 7.5672,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.4245,
        "delta_24_25_pct_points": 0.1818,
        "delta_23_25_pct_points": 0.6063,
        "z_rating": -0.0515,
        "avg_rating": 5.137,
        "prestige_concentration": 0.0998,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 38,
        "raw_label": "38_watermarking_watermark_watermarks_image",
        "label": "watermarking watermark watermarks image",
        "size_total": 56,
        "keywords": [
          "watermarking",
          "watermark",
          "watermarks",
          "image"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.0932,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.4709,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.6432,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.3777,
        "delta_24_25_pct_points": 0.1723,
        "delta_23_25_pct_points": 0.55,
        "z_rating": -0.0046,
        "avg_rating": 4.8964,
        "prestige_concentration": 0.125,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 7,
        "raw_label": "7_protein_molecular_and_drug",
        "label": "protein molecular and drug",
        "size_total": 311,
        "keywords": [
          "protein",
          "molecular",
          "drug"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 2.082,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.6022,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 2.6296,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.5202,
        "delta_24_25_pct_points": 0.0274,
        "delta_23_25_pct_points": 0.5475,
        "z_rating": 0.0478,
        "avg_rating": 5.2059,
        "prestige_concentration": 0.1383,
        "trajectory_type": "early growth / plateau",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 11,
        "raw_label": "11_series_time_forecasting_data",
        "label": "series time forecasting data",
        "size_total": 225,
        "keywords": [
          "series",
          "time",
          "forecasting",
          "data"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.3673,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.9827,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.9107,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.6153,
        "delta_24_25_pct_points": -0.0719,
        "delta_23_25_pct_points": 0.5434,
        "z_rating": 0.0484,
        "avg_rating": 5.2258,
        "prestige_concentration": 0.1111,
        "trajectory_type": "spike then reversal",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 26,
        "raw_label": "26_video_motion_generation_temporal",
        "label": "video motion generation temporal",
        "size_total": 153,
        "keywords": [
          "video",
          "motion",
          "generation",
          "temporal"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.9012,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.1896,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.4378,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.2884,
        "delta_24_25_pct_points": 0.2482,
        "delta_23_25_pct_points": 0.5366,
        "z_rating": -0.0457,
        "avg_rating": 5.03,
        "prestige_concentration": 0.1569,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 49,
        "raw_label": "49_hallucination_hallucinations_lvlms_decoding",
        "label": "hallucination in LVLMs",
        "size_total": 48,
        "keywords": [
          "hallucination",
          "hallucinations",
          "lvlms",
          "decoding"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.0622,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.3965,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.5675,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.3344,
        "delta_24_25_pct_points": 0.171,
        "delta_23_25_pct_points": 0.5054,
        "z_rating": -0.0944,
        "avg_rating": 4.8264,
        "prestige_concentration": 0.0208,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 33,
        "raw_label": "33_knowledge_retrieval_rag_query",
        "label": "knowledge retrieval rag query",
        "size_total": 113,
        "keywords": [
          "knowledge",
          "retrieval",
          "rag",
          "query"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.6526,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.8922,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.0594,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.2396,
        "delta_24_25_pct_points": 0.1672,
        "delta_23_25_pct_points": 0.4068,
        "z_rating": 0.002,
        "avg_rating": 5.1161,
        "prestige_concentration": 0.115,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 53,
        "raw_label": "53_manipulation_dexterous_grasp_contact",
        "label": "dexterous manipulation / robotics",
        "size_total": 54,
        "keywords": [
          "manipulation",
          "dexterous",
          "grasp",
          "contact"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.2797,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.223,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.681,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.0566,
        "delta_24_25_pct_points": 0.458,
        "delta_23_25_pct_points": 0.4014,
        "z_rating": -0.0047,
        "avg_rating": 4.7988,
        "prestige_concentration": 0.1852,
        "trajectory_type": "rebound",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 35,
        "raw_label": "35_medical_segmentation_clinical_images",
        "label": "medical image segmentation",
        "size_total": 101,
        "keywords": [
          "medical",
          "segmentation",
          "clinical",
          "images"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.5283,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.8674,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.927,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.3391,
        "delta_24_25_pct_points": 0.0596,
        "delta_23_25_pct_points": 0.3987,
        "z_rating": -0.0932,
        "avg_rating": 5.0134,
        "prestige_concentration": 0.0792,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 54,
        "raw_label": "54_decoding_speculative_draft_inference",
        "label": "decoding speculative draft inference",
        "size_total": 60,
        "keywords": [
          "decoding",
          "speculative",
          "draft",
          "inference"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.2797,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.5204,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.5675,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.2408,
        "delta_24_25_pct_points": 0.0471,
        "delta_23_25_pct_points": 0.2879,
        "z_rating": 0.0726,
        "avg_rating": 5.1458,
        "prestige_concentration": 0.15,
        "trajectory_type": "early growth / plateau",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 13,
        "raw_label": "13_transformers_transformer_attention_of",
        "label": "transformers transformer attention of",
        "size_total": 200,
        "keywords": [
          "transformers",
          "transformer",
          "attention"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.3052,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.834,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.5891,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.5288,
        "delta_24_25_pct_points": -0.2448,
        "delta_23_25_pct_points": 0.2839,
        "z_rating": 0.1402,
        "avg_rating": 5.3733,
        "prestige_concentration": 0.155,
        "trajectory_type": "spike then reversal",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 15,
        "raw_label": "15_pdes_pde_equations_differential",
        "label": "pdes pde equations differential",
        "size_total": 185,
        "keywords": [
          "pdes",
          "pde",
          "equations",
          "differential"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.3673,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.3383,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.6459,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.029,
        "delta_24_25_pct_points": 0.3076,
        "delta_23_25_pct_points": 0.2785,
        "z_rating": 0.1499,
        "avg_rating": 5.2941,
        "prestige_concentration": 0.1459,
        "trajectory_type": "late growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 32,
        "raw_label": "32_continual_forgetting_knowledge_unlearning",
        "label": "continual forgetting knowledge unlearning",
        "size_total": 132,
        "keywords": [
          "continual",
          "forgetting",
          "knowledge",
          "unlearning"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.9323,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.0657,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.1162,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.1334,
        "delta_24_25_pct_points": 0.0505,
        "delta_23_25_pct_points": 0.1839,
        "z_rating": -0.0142,
        "avg_rating": 5.1751,
        "prestige_concentration": 0.0682,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 40,
        "raw_label": "40_anomaly_detection_anomalies_normal",
        "label": "anomaly detection anomalies normal",
        "size_total": 59,
        "keywords": [
          "anomaly",
          "detection",
          "anomalies",
          "normal"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.4351,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.3222,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.6054,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.1129,
        "delta_24_25_pct_points": 0.2832,
        "delta_23_25_pct_points": 0.1703,
        "z_rating": -0.0468,
        "avg_rating": 4.9503,
        "prestige_concentration": 0.0678,
        "trajectory_type": "rebound",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 2,
        "raw_label": "2_diffusion_image_the_of",
        "label": "diffusion image the of",
        "size_total": 837,
        "keywords": [
          "diffusion",
          "image"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 6.4947,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 6.8401,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 6.6591,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.3454,
        "delta_24_25_pct_points": -0.181,
        "delta_23_25_pct_points": 0.1644,
        "z_rating": 0.0426,
        "avg_rating": 5.2554,
        "prestige_concentration": 0.1386,
        "trajectory_type": "spike then reversal",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 45,
        "raw_label": "45_recommendation_user_recommender_item",
        "label": "recommender systems",
        "size_total": 69,
        "keywords": [
          "recommendation",
          "user",
          "recommender",
          "item"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.4661,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.5204,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.6243,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.0543,
        "delta_24_25_pct_points": 0.1038,
        "delta_23_25_pct_points": 0.1582,
        "z_rating": -0.1089,
        "avg_rating": 5.0297,
        "prestige_concentration": 0.087,
        "trajectory_type": "consistent growth",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 28,
        "raw_label": "28_problems_optimization_combinatorial_search",
        "label": "problems optimization combinatorial search",
        "size_total": 136,
        "keywords": [
          "problems",
          "optimization",
          "combinatorial",
          "search"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.1187,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.8426,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.2486,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.2761,
        "delta_24_25_pct_points": 0.406,
        "delta_23_25_pct_points": 0.1299,
        "z_rating": 0.0526,
        "avg_rating": 5.181,
        "prestige_concentration": 0.1471,
        "trajectory_type": "rebound",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 44,
        "raw_label": "44_conformal_prediction_coverage_sets",
        "label": "conformal prediction coverage sets",
        "size_total": 77,
        "keywords": [
          "conformal",
          "prediction",
          "coverage",
          "sets"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.4972,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.6939,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.6243,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.1967,
        "delta_24_25_pct_points": -0.0696,
        "delta_23_25_pct_points": 0.1271,
        "z_rating": 0.0713,
        "avg_rating": 5.2775,
        "prestige_concentration": 0.1169,
        "trajectory_type": "spike then reversal",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 55,
        "raw_label": "55_face_facial_identity_deepfake",
        "label": "face / deepfake detection",
        "size_total": 46,
        "keywords": [
          "face",
          "facial",
          "identity",
          "deepfake"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.2175,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.5204,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.3405,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.3029,
        "delta_24_25_pct_points": -0.1799,
        "delta_23_25_pct_points": 0.123,
        "z_rating": -0.1388,
        "avg_rating": 5.0837,
        "prestige_concentration": 0.0435,
        "trajectory_type": "spike then reversal",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 17,
        "raw_label": "17_audio_speech_audiovisual_generation",
        "label": "audio speech audiovisual generation",
        "size_total": 132,
        "keywords": [
          "audio",
          "speech",
          "audiovisual",
          "generation"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.0566,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.0409,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.0594,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.0157,
        "delta_24_25_pct_points": 0.0185,
        "delta_23_25_pct_points": 0.0028,
        "z_rating": 0.1523,
        "avg_rating": 5.3595,
        "prestige_concentration": 0.1212,
        "trajectory_type": "stable",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 50,
        "raw_label": "50_quantization_quantized_lowbit_4bit",
        "label": "quantization quantized lowbit 4bit",
        "size_total": 88,
        "keywords": [
          "quantization",
          "quantized",
          "lowbit",
          "4bit"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.6215,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.8674,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.6243,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.2459,
        "delta_24_25_pct_points": -0.2431,
        "delta_23_25_pct_points": 0.0028,
        "z_rating": 0.0433,
        "avg_rating": 5.3347,
        "prestige_concentration": 0.1477,
        "trajectory_type": "spike then reversal",
        "interpretation": "Rising topic in accepted-paper share; inspect adjacent-year deltas for trajectory shape."
      },
      {
        "topic_id": 47,
        "raw_label": "47_quantum_classical_of_the",
        "label": "quantum classical of the",
        "size_total": 42,
        "keywords": [
          "quantum",
          "classical"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.3729,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.3222,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.3216,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.0507,
        "delta_24_25_pct_points": -0.0006,
        "delta_23_25_pct_points": -0.0513,
        "z_rating": 0.0651,
        "avg_rating": 5.3381,
        "prestige_concentration": 0.2143,
        "trajectory_type": "early decline / plateau",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 48,
        "raw_label": "48_pruning_sparsity_compression_sparse",
        "label": "pruning sparsity compression sparse",
        "size_total": 82,
        "keywords": [
          "pruning",
          "sparsity",
          "compression",
          "sparse"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.5594,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.9418,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.4919,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.3824,
        "delta_24_25_pct_points": -0.4499,
        "delta_23_25_pct_points": -0.0675,
        "z_rating": 0.0326,
        "avg_rating": 5.4146,
        "prestige_concentration": 0.0976,
        "trajectory_type": "spike then reversal",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 19,
        "raw_label": "19_federated_fl_clients_client",
        "label": "federated fl clients client",
        "size_total": 132,
        "keywords": [
          "federated",
          "clients",
          "client"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.0566,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.2392,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.9081,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.1826,
        "delta_24_25_pct_points": -0.3311,
        "delta_23_25_pct_points": -0.1485,
        "z_rating": -0.107,
        "avg_rating": 5.1963,
        "prestige_concentration": 0.053,
        "trajectory_type": "spike then reversal",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 51,
        "raw_label": "51_optimization_bayesian_bo_the",
        "label": "optimization bayesian bo the",
        "size_total": 77,
        "keywords": [
          "optimization",
          "bayesian"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.6837,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.7187,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.4919,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": 0.0351,
        "delta_24_25_pct_points": -0.2268,
        "delta_23_25_pct_points": -0.1918,
        "z_rating": 0.1454,
        "avg_rating": 5.4688,
        "prestige_concentration": 0.1818,
        "trajectory_type": "late decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 42,
        "raw_label": "42_backdoor_attacks_attack_defense",
        "label": "backdoor attacks attack defense",
        "size_total": 75,
        "keywords": [
          "backdoor",
          "attacks",
          "attack",
          "defense"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.7458,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.5948,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.5108,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.151,
        "delta_24_25_pct_points": -0.084,
        "delta_23_25_pct_points": -0.235,
        "z_rating": -0.1395,
        "avg_rating": 5.1618,
        "prestige_concentration": 0.08,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 52,
        "raw_label": "52_ssl_selfsupervised_unlabeled_semisupervised",
        "label": "ssl selfsupervised unlabeled semisupervised",
        "size_total": 42,
        "keywords": [
          "ssl",
          "selfsupervised",
          "unlabeled",
          "semisupervised"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.5283,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.3222,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.227,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.2061,
        "delta_24_25_pct_points": -0.0952,
        "delta_23_25_pct_points": -0.3013,
        "z_rating": 0.1219,
        "avg_rating": 5.546,
        "prestige_concentration": 0.1905,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 30,
        "raw_label": "30_fairness_fair_groups_in",
        "label": "fairness fair groups in",
        "size_total": 89,
        "keywords": [
          "fairness",
          "fair",
          "groups"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.9323,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.6691,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.6054,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.2631,
        "delta_24_25_pct_points": -0.0638,
        "delta_23_25_pct_points": -0.3269,
        "z_rating": 0.0961,
        "avg_rating": 5.4193,
        "prestige_concentration": 0.0674,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 6,
        "raw_label": "6_brain_spiking_of_and",
        "label": "brain spiking of and",
        "size_total": 402,
        "keywords": [
          "brain",
          "spiking"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 3.6047,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.8005,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 3.2728,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.8042,
        "delta_24_25_pct_points": 0.4723,
        "delta_23_25_pct_points": -0.3319,
        "z_rating": 0.1781,
        "avg_rating": 5.3893,
        "prestige_concentration": 0.1741,
        "trajectory_type": "rebound",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 39,
        "raw_label": "39_clustering_algorithm_algorithms_approximation",
        "label": "clustering / approximation algorithms",
        "size_total": 87,
        "keywords": [
          "clustering",
          "algorithm",
          "algorithms",
          "approximation"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.9323,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.6691,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.5675,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.2631,
        "delta_24_25_pct_points": -0.1016,
        "delta_23_25_pct_points": -0.3647,
        "z_rating": 0.2119,
        "avg_rating": 5.5611,
        "prestige_concentration": 0.1034,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 43,
        "raw_label": "43_ood_detection_outofdistribution_id",
        "label": "ood detection outofdistribution id",
        "size_total": 76,
        "keywords": [
          "ood",
          "detection",
          "outofdistribution"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 0.8701,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.6444,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.4162,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.2257,
        "delta_24_25_pct_points": -0.2282,
        "delta_23_25_pct_points": -0.4539,
        "z_rating": -0.0477,
        "avg_rating": 5.3673,
        "prestige_concentration": 0.0658,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 31,
        "raw_label": "31_label_labels_the_noisy",
        "label": "label labels the noisy",
        "size_total": 147,
        "keywords": [
          "label",
          "labels",
          "noisy"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.4605,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.1896,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.9837,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.2709,
        "delta_24_25_pct_points": -0.2059,
        "delta_23_25_pct_points": -0.4768,
        "z_rating": 0.0291,
        "avg_rating": 5.3474,
        "prestige_concentration": 0.102,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 34,
        "raw_label": "34_communication_distributed_federated_convergence",
        "label": "communication distributed federated convergence",
        "size_total": 96,
        "keywords": [
          "communication",
          "distributed",
          "federated",
          "convergence"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.0255,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.9665,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.454,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.0589,
        "delta_24_25_pct_points": -0.5125,
        "delta_23_25_pct_points": -0.5715,
        "z_rating": 0.0511,
        "avg_rating": 5.5305,
        "prestige_concentration": 0.1146,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 41,
        "raw_label": "41_equivariant_symmetries_group_symmetry",
        "label": "equivariant symmetries group symmetry",
        "size_total": 97,
        "keywords": [
          "equivariant",
          "symmetries",
          "group",
          "symmetry"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.3052,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.7187,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.4919,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.5864,
        "delta_24_25_pct_points": -0.2268,
        "delta_23_25_pct_points": -0.8133,
        "z_rating": 0.1512,
        "avg_rating": 5.6141,
        "prestige_concentration": 0.1546,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 9,
        "raw_label": "9_causal_treatment_variables_of",
        "label": "causal treatment variables of",
        "size_total": 280,
        "keywords": [
          "causal",
          "treatment",
          "variables"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 2.7657,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.2305,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.9107,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.5352,
        "delta_24_25_pct_points": -0.3198,
        "delta_23_25_pct_points": -0.855,
        "z_rating": 0.0734,
        "avg_rating": 5.3864,
        "prestige_concentration": 0.1286,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 25,
        "raw_label": "25_games_game_equilibrium_equilibria",
        "label": "game theory / equilibria",
        "size_total": 124,
        "keywords": [
          "games",
          "game",
          "equilibrium",
          "equilibria"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 1.5848,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 0.8922,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.7,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.6926,
        "delta_24_25_pct_points": -0.1922,
        "delta_23_25_pct_points": -0.8849,
        "z_rating": 0.2236,
        "avg_rating": 5.6456,
        "prestige_concentration": 0.1613,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 24,
        "raw_label": "24_the_of_is_we",
        "label": "statistical learning theory",
        "size_total": 222,
        "keywords": [
          "statistical",
          "learning",
          "theory"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 2.2996,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.0322,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.2486,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.2673,
        "delta_24_25_pct_points": -0.7836,
        "delta_23_25_pct_points": -1.051,
        "z_rating": 0.2466,
        "avg_rating": 5.6715,
        "prestige_concentration": 0.1757,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 18,
        "raw_label": "18_optimization_convergence_gradient_convex",
        "label": "convex optimization",
        "size_total": 236,
        "keywords": [
          "optimization",
          "convergence",
          "gradient",
          "convex"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 2.5482,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.9083,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.4567,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.6399,
        "delta_24_25_pct_points": -0.4516,
        "delta_23_25_pct_points": -1.0915,
        "z_rating": 0.0963,
        "avg_rating": 5.4702,
        "prestige_concentration": 0.1356,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 16,
        "raw_label": "16_the_of_deep_gradient",
        "label": "deep learning theory",
        "size_total": 298,
        "keywords": [
          "deep",
          "gradient"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 3.0143,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.5031,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.8918,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.5112,
        "delta_24_25_pct_points": -0.6113,
        "delta_23_25_pct_points": -1.1225,
        "z_rating": 0.1514,
        "avg_rating": 5.5112,
        "prestige_concentration": 0.1577,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 10,
        "raw_label": "10_privacy_private_dp_differentially",
        "label": "differential privacy",
        "size_total": 219,
        "keywords": [
          "privacy",
          "private",
          "differentially"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 2.6725,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.5861,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.3053,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -1.0863,
        "delta_24_25_pct_points": -0.2808,
        "delta_23_25_pct_points": -1.3671,
        "z_rating": 0.166,
        "avg_rating": 5.5605,
        "prestige_concentration": 0.1689,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 27,
        "raw_label": "27_bayesian_posterior_inference_of",
        "label": "Bayesian inference",
        "size_total": 249,
        "keywords": [
          "bayesian",
          "posterior",
          "inference"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 3.1386,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.5861,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.5891,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -1.5525,
        "delta_24_25_pct_points": 0.003,
        "delta_23_25_pct_points": -1.5495,
        "z_rating": 0.1936,
        "avg_rating": 5.5574,
        "prestige_concentration": 0.1285,
        "trajectory_type": "early decline / plateau",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 12,
        "raw_label": "12_adversarial_attacks_robustness_attack",
        "label": "adversarial robustness",
        "size_total": 258,
        "keywords": [
          "adversarial",
          "attacks",
          "robustness",
          "attack"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 3.0454,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 2.1066,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 1.4188,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -0.9388,
        "delta_24_25_pct_points": -0.6877,
        "delta_23_25_pct_points": -1.6265,
        "z_rating": -0.0491,
        "avg_rating": 5.3667,
        "prestige_concentration": 0.1085,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 29,
        "raw_label": "29_matrix_the_of_is",
        "label": "matrix algorithms",
        "size_total": 201,
        "keywords": [
          "matrix",
          "algorithms"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 2.6414,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 1.5861,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 0.9837,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -1.0553,
        "delta_24_25_pct_points": -0.6024,
        "delta_23_25_pct_points": -1.6577,
        "z_rating": 0.2135,
        "avg_rating": 5.6957,
        "prestige_concentration": 0.204,
        "trajectory_type": "consistent decline",
        "interpretation": "High-rated but declining mathematical area; share falls in both intervals."
      },
      {
        "topic_id": 5,
        "raw_label": "5_regret_the_bandits_bandit",
        "label": "bandits / regret minimization",
        "size_total": 482,
        "keywords": [
          "regret",
          "bandits",
          "bandit"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 4.8788,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 3.8662,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 3.1971,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -1.0126,
        "delta_24_25_pct_points": -0.669,
        "delta_23_25_pct_points": -1.6817,
        "z_rating": 0.1333,
        "avg_rating": 5.4675,
        "prestige_concentration": 0.1162,
        "trajectory_type": "consistent decline",
        "interpretation": "Declining topic in accepted-paper share; this does not imply lower paper quality."
      },
      {
        "topic_id": 4,
        "raw_label": "4_graph_graphs_gnns_node",
        "label": "graph neural networks",
        "size_total": 507,
        "keywords": [
          "graph",
          "graphs",
          "gnns",
          "node"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 5.2517,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 3.9405,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 3.3863,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -1.3112,
        "delta_24_25_pct_points": -0.5542,
        "delta_23_25_pct_points": -1.8654,
        "z_rating": 0.056,
        "avg_rating": 5.3833,
        "prestige_concentration": 0.1006,
        "trajectory_type": "consistent decline",
        "interpretation": "Consistent decline in accepted-paper share, not evidence of field-level collapse."
      },
      {
        "topic_id": 0,
        "raw_label": "0_policy_rl_reinforcement_the",
        "label": "RL / policy learning",
        "size_total": 1029,
        "keywords": [
          "policy",
          "reinforcement"
        ],
        "years": {
          "2023": {
            "accepted_share_pct": 9.8198,
            "accepted_count": null
          },
          "2024": {
            "accepted_share_pct": 8.0297,
            "accepted_count": null
          },
          "2025": {
            "accepted_share_pct": 7.3591,
            "accepted_count": null
          }
        },
        "delta_23_24_pct_points": -1.79,
        "delta_24_25_pct_points": -0.6707,
        "delta_23_25_pct_points": -2.4607,
        "z_rating": 0.0546,
        "avg_rating": 5.3418,
        "prestige_concentration": 0.1166,
        "trajectory_type": "consistent decline",
        "interpretation": "Large established area whose relative accepted-paper share declines across both intervals."
      }
    ]
  },
  "representatives": {
    "representatives": [
      {
        "topic_id": 0,
        "label": "RL / policy learning",
        "papers": [
          {
            "rank": 1,
            "paper_id": "pGEY8JQ3qx",
            "title": "Span-Based Optimal Sample Complexity for Weakly Communicating and General Average Reward MDPs",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.75,
            "avg_rating_z": 1.5882980506982585,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=pGEY8JQ3qx",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Span-Based+Optimal+Sample+Complexity+for+Weakly+Communicating+and+General+Average+Reward+MDPs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "cYZibc2gKf",
            "title": "Abstract Reward Processes: Leveraging State Abstraction for Consistent Off-Policy Evaluation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=cYZibc2gKf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Abstract+Reward+Processes%3A+Leveraging+State+Abstraction+for+Consistent+Off-Policy+Evaluation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "fu0xdh4aEJ",
            "title": "Bigger, Regularized, Optimistic: scaling for compute and sample efficient continuous control",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=fu0xdh4aEJ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Bigger%2C+Regularized%2C+Optimistic%3A+scaling+for+compute+and+sample+efficient+continuous+control",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "hH4bPkOhhh",
            "title": "Identifying Selections for Unsupervised Subtask Discovery",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=hH4bPkOhhh",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Identifying+Selections+for+Unsupervised+Subtask+Discovery",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "QFUsZvw9mx",
            "title": "Towards an Information Theoretic Framework of Context-Based Offline Meta-Reinforcement Learning",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=QFUsZvw9mx",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Towards+an+Information+Theoretic+Framework+of+Context-Based+Offline+Meta-Reinforcement+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 1,
        "label": "3D vision / scene generation",
        "papers": [
          {
            "rank": 1,
            "paper_id": "x7pjdDod6Z",
            "title": "MeshFormer : High-Quality Mesh Generation with 3D-Guided Reconstruction Model",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.2,
            "avg_rating_z": 1.1246333394379104,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=x7pjdDod6Z",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=MeshFormer+%3A+High-Quality+Mesh+Generation+with+3D-Guided+Reconstruction+Model",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "TFZlFRl9Ks",
            "title": "CAT3D: Create Anything in 3D with Multi-View Diffusion Models",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=TFZlFRl9Ks",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=CAT3D%3A+Create+Anything+in+3D+with+Multi-View+Diffusion+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "1IOU2329Za",
            "title": "Banana: Banach Fixed-Point Network for Pointcloud Segmentation with Inter-Part Equivariance",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.757902568734561,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=1IOU2329Za",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Banana%3A+Banach+Fixed-Point+Network+for+Pointcloud+Segmentation+with+Inter-Part+Equivariance",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "KgqucdSwIe",
            "title": "VoxDet: Voxel Learning for Novel Instance Detection",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.757902568734561,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=KgqucdSwIe",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=VoxDet%3A+Voxel+Learning+for+Novel+Instance+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "6AeIDnrTN2",
            "title": "LightGaussian: Unbounded 3D Gaussian Compression with 15x Reduction and 200+ FPS",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=6AeIDnrTN2",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=LightGaussian%3A+Unbounded+3D+Gaussian+Compression+with+15x+Reduction+and+200%2B+FPS",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 2,
        "label": "diffusion image the of",
        "papers": [
          {
            "rank": 1,
            "paper_id": "gojL67CfS8",
            "title": "Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.75,
            "avg_rating_z": 1.5882980506982585,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=gojL67CfS8",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Visual+Autoregressive+Modeling%3A+Scalable+Image+Generation+via+Next-Scale+Prediction",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "3Odq2tGSpp",
            "title": "Stylus: Automatic Adapter Selection for Diffusion Models",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3775413637617366,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=3Odq2tGSpp",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Stylus%3A+Automatic+Adapter+Selection+for+Diffusion+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "NnMEadcdyD",
            "title": "Understanding Diffusion Objectives as the ELBO with Simple Data Augmentation",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.4,
            "avg_rating_z": 1.2604663214348872,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=NnMEadcdyD",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Understanding+Diffusion+Objectives+as+the+ELBO+with+Simple+Data+Augmentation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "fqmSGK8C0B",
            "title": "Deep Learning for Computing Convergence Rates of Markov Chains",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=fqmSGK8C0B",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Deep+Learning+for+Computing+Convergence+Rates+of+Markov+Chains",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "bg6fVPVs3s",
            "title": "Guiding a Diffusion Model with a Bad Version of Itself",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=bg6fVPVs3s",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Guiding+a+Diffusion+Model+with+a+Bad+Version+of+Itself",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 3,
        "label": "multimodal visual and to",
        "papers": [
          {
            "rank": 1,
            "paper_id": "lA48H7pW3q",
            "title": "QUEST: Quadruple Multimodal Contrastive Learning with Constraints and Self-Penalization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=lA48H7pW3q",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=QUEST%3A+Quadruple+Multimodal+Contrastive+Learning+with+Constraints+and+Self-Penalization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "XgwTH95kCl",
            "title": "Toward Robust Incomplete Multimodal Sentiment Analysis via Hierarchical Representation Learning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=XgwTH95kCl",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Toward+Robust+Incomplete+Multimodal+Sentiment+Analysis+via+Hierarchical+Representation+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "4D7hnJ9oM6",
            "title": "WATT: Weight Average Test Time Adaptation of CLIP",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=4D7hnJ9oM6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=WATT%3A+Weight+Average+Test+Time+Adaptation+of+CLIP",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "7xlrdSOm3g",
            "title": "A Theory of Multimodal Learning",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7579025687345609,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=7xlrdSOm3g",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+Theory+of+Multimodal+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "Q9CNA7B7v2",
            "title": "SegRefiner: Towards Model-Agnostic Segmentation Refinement with Discrete Diffusion Process",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.757902568734561,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Q9CNA7B7v2",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SegRefiner%3A+Towards+Model-Agnostic+Segmentation+Refinement+with+Discrete+Diffusion+Process",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 4,
        "label": "graph neural networks",
        "papers": [
          {
            "rank": 1,
            "paper_id": "jgkKroLxeC",
            "title": "Unified Graph Augmentations for Generalized Contrastive Learning on Graphs",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=jgkKroLxeC",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Unified+Graph+Augmentations+for+Generalized+Contrastive+Learning+on+Graphs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "y8P633E5HQ",
            "title": "Equivariant Machine Learning on Graphs with Nonlinear Spectral Filters",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.6188172907902577,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=y8P633E5HQ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Equivariant+Machine+Learning+on+Graphs+with+Nonlinear+Spectral+Filters",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "jt10uWlEbc",
            "title": "Fine-grained Expressivity of Graph Neural Networks",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.5903813178344521,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=jt10uWlEbc",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Fine-grained+Expressivity+of+Graph+Neural+Networks",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "JDAQwysFOc",
            "title": "Non-convolutional graph neural networks.",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=JDAQwysFOc",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Non-convolutional+graph+neural+networks.",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "p8lowHbuv8",
            "title": "From Trainable Negative Depth to Edge Heterophily in Graphs",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=p8lowHbuv8",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=From+Trainable+Negative+Depth+to+Edge+Heterophily+in+Graphs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 5,
        "label": "bandits / regret minimization",
        "papers": [
          {
            "rank": 1,
            "paper_id": "Q4NWfStqVf",
            "title": "Nearly Minimax Optimal Regret for Multinomial Logistic Bandit",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.4,
            "avg_rating_z": 1.293238688987128,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Q4NWfStqVf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Nearly+Minimax+Optimal+Regret+for+Multinomial+Logistic+Bandit",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "RYQ0KuZvkL",
            "title": "Sample Complexity Reduction via Policy Difference Estimation in Tabular Reinforcement Learning",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=RYQ0KuZvkL",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Sample+Complexity+Reduction+via+Policy+Difference+Estimation+in+Tabular+Reinforcement+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "TXoZiUZywf",
            "title": "Improved Algorithms for Stochastic Linear Bandits Using Tail Bounds for Martingale Mixtures",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1348253832598056,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=TXoZiUZywf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Improved+Algorithms+for+Stochastic+Linear+Bandits+Using+Tail+Bounds+for+Martingale+Mixtures",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "XfYpIaKDb6",
            "title": "On the Minimax Regret for Online Learning with Feedback Graphs",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1348253832598056,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=XfYpIaKDb6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+the+Minimax+Regret+for+Online+Learning+with+Feedback+Graphs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "dY4YGqvfgW",
            "title": "On Weak Regret Analysis for Dueling Bandits",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=dY4YGqvfgW",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+Weak+Regret+Analysis+for+Dueling+Bandits",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 6,
        "label": "brain spiking of and",
        "papers": [
          {
            "rank": 1,
            "paper_id": "qTypwXvNJa",
            "title": "Geodesic Optimization for Predictive Shift Adaptation on EEG data",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3775413637617366,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=qTypwXvNJa",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Geodesic+Optimization+for+Predictive+Shift+Adaptation+on+EEG+data",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "AbTpJl7vN6",
            "title": "Flexible task abstractions emerge in linear networks with fast and bounded units",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=AbTpJl7vN6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Flexible+task+abstractions+emerge+in+linear+networks+with+fast+and+bounded+units",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "nw9JmfL99s",
            "title": "Nonlinear dynamics of localization in neural receptive fields",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=nw9JmfL99s",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Nonlinear+dynamics+of+localization+in+neural+receptive+fields",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "OQzCSb6fbl",
            "title": "Parallel Backpropagation for Shared-Feature Visualization",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1667846768252146,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=OQzCSb6fbl",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Parallel+Backpropagation+for+Shared-Feature+Visualization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "u39QQh5L8Q",
            "title": "Uncovering motifs of concurrent signaling across multiple neuronal populations",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1348253832598056,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=u39QQh5L8Q",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Uncovering+motifs+of+concurrent+signaling+across+multiple+neuronal+populations",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 7,
        "label": "protein molecular and drug",
        "papers": [
          {
            "rank": 1,
            "paper_id": "WPdGRRJaPb",
            "title": "Full-Atom Protein Pocket Design via Iterative Refinement",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.6,
            "avg_rating_z": 1.427987572334996,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=WPdGRRJaPb",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Full-Atom+Protein+Pocket+Design+via+Iterative+Refinement",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "WyVTj77KEV",
            "title": "Generalized Protein Pocket Generation with Prior-Informed Flow Matching",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=WyVTj77KEV",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Generalized+Protein+Pocket+Generation+with+Prior-Informed+Flow+Matching",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "gipFTlvfF1",
            "title": "Conditional Synthesis of 3D Molecules with Time Correction Sampler",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=gipFTlvfF1",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Conditional+Synthesis+of+3D+Molecules+with+Time+Correction+Sampler",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "OEWBkLrRZu",
            "title": "Towards Stable Representations for Protein Interface Prediction",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=OEWBkLrRZu",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Towards+Stable+Representations+for+Protein+Interface+Prediction",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "Eb74zfBkWa",
            "title": "Disentangled Wasserstein Autoencoder for T-Cell Receptor Engineering",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.2972191287592618,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Eb74zfBkWa",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Disentangled+Wasserstein+Autoencoder+for+T-Cell+Receptor+Engineering",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 8,
        "label": "LLM reasoning",
        "papers": [
          {
            "rank": 1,
            "paper_id": "VqkAKQibpq",
            "title": "SGLang: Efficient Execution of Structured Language Model Programs",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.4,
            "avg_rating_z": 1.293238688987128,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=VqkAKQibpq",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SGLang%3A+Efficient+Execution+of+Structured+Language+Model+Programs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "rcXXNFVlEn",
            "title": "Why think step by step? Reasoning emerges from the locality of experience",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1348253832598056,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=rcXXNFVlEn",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Why+think+step+by+step%3F+Reasoning+emerges+from+the+locality+of+experience",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "NPKZF1WDjZ",
            "title": "Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7874226403394753,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=NPKZF1WDjZ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Decompose%2C+Analyze+and+Rethink%3A+Solving+Intricate+Problems+with+Human-like+Reasoning+Cycle",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "e397soEZh8",
            "title": "Learning Structure-Aware Representations of Dependent Types",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=e397soEZh8",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+Structure-Aware+Representations+of+Dependent+Types",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "qVMPXrX4FR",
            "title": "LambdaBeam: Neural Program Search with Higher-Order Functions and Lambdas",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=qVMPXrX4FR",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=LambdaBeam%3A+Neural+Program+Search+with+Higher-Order+Functions+and+Lambdas",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 9,
        "label": "causal treatment variables of",
        "papers": [
          {
            "rank": 1,
            "paper_id": "OIsUWQSvkD",
            "title": "Identifying Causal Effects Under Functional Dependencies",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3775413637617366,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=OIsUWQSvkD",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Identifying+Causal+Effects+Under+Functional+Dependencies",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "q131tA7HCT",
            "title": "Learning Linear Causal Representations from Interventions under General Nonlinear Mixing",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3442269468849417,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=q131tA7HCT",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+Linear+Causal+Representations+from+Interventions+under+General+Nonlinear+Mixing",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "4rCZeCZAON",
            "title": "Do Finetti: On Causal Effects for Exchangeable Data",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=4rCZeCZAON",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Do+Finetti%3A+On+Causal+Effects+for+Exchangeable+Data",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "QIFoCI7ca1",
            "title": "Causal normalizing flows: from theory to practice",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.2,
            "avg_rating_z": 1.0929450705347783,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=QIFoCI7ca1",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Causal+normalizing+flows%3A+from+theory+to+practice",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "weemASPtzg",
            "title": "Linear Causal Representation Learning from Unknown Multi-node Interventions",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=weemASPtzg",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Linear+Causal+Representation+Learning+from+Unknown+Multi-node+Interventions",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 10,
        "label": "differential privacy",
        "papers": [
          {
            "rank": 1,
            "paper_id": "PITeSdYQkv",
            "title": "User-Level Differential Privacy With Few Examples Per User",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3442269468849417,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=PITeSdYQkv",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=User-Level+Differential+Privacy+With+Few+Examples+Per+User",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "7yjsYrajlt",
            "title": "The Target-Charging Technique for Privacy Analysis across Interactive Computations",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.833333333333333,
            "avg_rating_z": 0.7858227772179124,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=7yjsYrajlt",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=The+Target-Charging+Technique+for+Privacy+Analysis+across+Interactive+Computations",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "BAjjINf0Oh",
            "title": "Oracle-Efficient Differentially Private Learning with Public Data",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7874226403394752,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=BAjjINf0Oh",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Oracle-Efficient+Differentially+Private+Learning+with+Public+Data",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "CgGjT8EG8A",
            "title": "Universal Exact Compression of Differentially Private Mechanisms",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=CgGjT8EG8A",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Universal+Exact+Compression+of+Differentially+Private+Mechanisms",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "izNfcaHJk0",
            "title": "Privacy Amplification via Compression: Achieving the Optimal Privacy-Accuracy-Communication Trade-off in Distributed Mean Estimation",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=izNfcaHJk0",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Privacy+Amplification+via+Compression%3A+Achieving+the+Optimal+Privacy-Accuracy-Communication+Trade-off+in+Distributed+Mean+Estimation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 11,
        "label": "series time forecasting data",
        "papers": [
          {
            "rank": 1,
            "paper_id": "DV15UbHCY1",
            "title": "Are Language Models Actually Useful for Time Series Forecasting?",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1667846768252146,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=DV15UbHCY1",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Are+Language+Models+Actually+Useful+for+Time+Series+Forecasting%3F",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "clBiQUgj4w",
            "title": "CycleNet: Enhancing Time Series Forecasting through Modeling Periodic Patterns",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1667846768252146,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=clBiQUgj4w",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=CycleNet%3A+Enhancing+Time+Series+Forecasting+through+Modeling+Periodic+Patterns",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "wiEHZSV15I",
            "title": "Parsimony or Capability? Decomposition Delivers Both in Long-term Time Series Forecasting",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.6750190739733303,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=wiEHZSV15I",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Parsimony+or+Capability%3F+Decomposition+Delivers+Both+in+Long-term+Time+Series+Forecasting",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "FOvZztnp1H",
            "title": "AutoTimes: Autoregressive Time Series Forecasters via Large Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=FOvZztnp1H",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=AutoTimes%3A+Autoregressive+Time+Series+Forecasters+via+Large+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "B1Iq1EOiVU",
            "title": "DeformableTST: Transformer for Time Series Forecasting without Over-reliance on Patching",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=B1Iq1EOiVU",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=DeformableTST%3A+Transformer+for+Time+Series+Forecasting+without+Over-reliance+on+Patching",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 12,
        "label": "adversarial robustness",
        "papers": [
          {
            "rank": 1,
            "paper_id": "MN4nt01TeO",
            "title": "Adaptive Randomized Smoothing: Certified Adversarial Robustness for Multi-Step Defences",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=MN4nt01TeO",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Adaptive+Randomized+Smoothing%3A+Certified+Adversarial+Robustness+for+Multi-Step+Defences",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "MPidsCd9e7",
            "title": "Adversarially Robust Dense-Sparse Tradeoffs via Heavy-Hitters",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=MPidsCd9e7",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Adversarially+Robust+Dense-Sparse+Tradeoffs+via+Heavy-Hitters",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "iT9MOAZqsb",
            "title": "Adversarial Training from Mean Field Perspective",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=iT9MOAZqsb",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Adversarial+Training+from+Mean+Field+Perspective",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "xbbknN9QFs",
            "title": "On Evaluating Adversarial Robustness of Large Vision-Language Models",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=xbbknN9QFs",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+Evaluating+Adversarial+Robustness+of+Large+Vision-Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "K8gLHZIgVW",
            "title": "Regularization properties of adversarially-trained linear regression",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=K8gLHZIgVW",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Regularization+properties+of+adversarially-trained+linear+regression",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 13,
        "label": "transformers transformer attention of",
        "papers": [
          {
            "rank": 1,
            "paper_id": "aMjaEkkXJx",
            "title": "The emergence of clusters in self-attention dynamics",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=aMjaEkkXJx",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=The+emergence+of+clusters+in+self-attention+dynamics",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "liMSqUuVg9",
            "title": "Transformers as Statisticians: Provable In-Context Learning with In-Context Algorithm Selection",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=liMSqUuVg9",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Transformers+as+Statisticians%3A+Provable+In-Context+Learning+with+In-Context+Algorithm+Selection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "LziniAXEI9",
            "title": "Transformers learn to implement preconditioned gradient descent for in-context learning",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=LziniAXEI9",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Transformers+learn+to+implement+preconditioned+gradient+descent+for+in-context+learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "p0BBKhD5aI",
            "title": "Infinite Limits of Multi-head Transformer Dynamics",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=p0BBKhD5aI",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Infinite+Limits+of+Multi-head+Transformer+Dynamics",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "BtAz4a5xDg",
            "title": "Pretraining task diversity and the emergence of non-Bayesian in-context learning for regression",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4228600669343434,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=BtAz4a5xDg",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Pretraining+task+diversity+and+the+emergence+of+non-Bayesian+in-context+learning+for+regression",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 14,
        "label": "preference learning / alignment",
        "papers": [
          {
            "rank": 1,
            "paper_id": "HPuSIXJaa9",
            "title": "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.75,
            "avg_rating_z": 1.5536285105100776,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=HPuSIXJaa9",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Direct+Preference+Optimization%3A+Your+Language+Model+is+Secretly+a+Reward+Model",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "KwRLDkyVOl",
            "title": "Noise Contrastive Alignment of Language Models with Explicit Rewards",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7874226403394753,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=KwRLDkyVOl",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Noise+Contrastive+Alignment+of+Language+Models+with+Explicit+Rewards",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "3csuL7TVpV",
            "title": "Decoding-Time Language Model Alignment with Multiple Objectives",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=3csuL7TVpV",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Decoding-Time+Language+Model+Alignment+with+Multiple+Objectives",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "Swh8LxuycA",
            "title": "Learning Goal-Conditioned Representations for Language Reward Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Swh8LxuycA",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+Goal-Conditioned+Representations+for+Language+Reward+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "CSbGXyCswu",
            "title": "Fine-Grained Human Feedback Gives Better Rewards for Language Model Training",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=CSbGXyCswu",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Fine-Grained+Human+Feedback+Gives+Better+Rewards+for+Language+Model+Training",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 15,
        "label": "pdes pde equations differential",
        "papers": [
          {
            "rank": 1,
            "paper_id": "Aj8RKCGwjE",
            "title": "AROMA: Preserving Spatial Structure for Latent PDE Modeling with Local Neural Fields",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Aj8RKCGwjE",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=AROMA%3A+Preserving+Spatial+Structure+for+Latent+PDE+Modeling+with+Local+Neural+Fields",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "v6YzxwJlQn",
            "title": "Deep Equilibrium Based Neural Operators for Steady-State PDEs",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=v6YzxwJlQn",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Deep+Equilibrium+Based+Neural+Operators+for+Steady-State+PDEs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "Qv6468llWS",
            "title": "PDE-Refiner: Achieving Accurate Long Rollouts with Neural PDE Solvers",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Qv6468llWS",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=PDE-Refiner%3A+Achieving+Accurate+Long+Rollouts+with+Neural+PDE+Solvers",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "oUXiNX5KRm",
            "title": "Universal Physics Transformers: A Framework For Efficiently Scaling Neural Operators",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.6188172907902577,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=oUXiNX5KRm",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Universal+Physics+Transformers%3A+A+Framework+For+Efficiently+Scaling+Neural+Operators",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "MtekhXRP4h",
            "title": "Convolutional Neural Operators for robust and accurate learning of PDEs",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=MtekhXRP4h",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Convolutional+Neural+Operators+for+robust+and+accurate+learning+of+PDEs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 16,
        "label": "deep learning theory",
        "papers": [
          {
            "rank": 1,
            "paper_id": "vBlzen37i0",
            "title": "Optimal deep learning of holomorphic operators between Banach spaces",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.666666666666667,
            "avg_rating_z": 1.5180458217194177,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=vBlzen37i0",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Optimal+deep+learning+of+holomorphic+operators+between+Banach+spaces",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "kfdEXQu6MC",
            "title": "A generalized neural tangent kernel for surrogate gradient learning",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3775413637617364,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=kfdEXQu6MC",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+generalized+neural+tangent+kernel+for+surrogate+gradient+learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "m6pVpdIN0y",
            "title": "Neglected Hessian component explains mysteries in sharpness regularization",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=m6pVpdIN0y",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Neglected+Hessian+component+explains+mysteries+in+sharpness+regularization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "fShubymWrc",
            "title": "Provable Guarantees for Nonlinear Feature Learning in Three-Layer Neural Networks",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9254238196346696,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=fShubymWrc",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Provable+Guarantees+for+Nonlinear+Feature+Learning+in+Three-Layer+Neural+Networks",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "konBXvt2iS",
            "title": "Understanding Multi-phase Optimization Dynamics and Rich Nonlinear Behaviors of ReLU Networks",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=konBXvt2iS",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Understanding+Multi-phase+Optimization+Dynamics+and+Rich+Nonlinear+Behaviors+of+ReLU+Networks",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 17,
        "label": "audio speech audiovisual generation",
        "papers": [
          {
            "rank": 1,
            "paper_id": "V3QZCM1AQv",
            "title": "REBORN: Reinforcement-Learned Boundary Segmentation with Iterative Training for Unsupervised ASR",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=V3QZCM1AQv",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=REBORN%3A+Reinforcement-Learned+Boundary+Segmentation+with+Iterative+Training+for+Unsupervised+ASR",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "18RdkSv9h9",
            "title": "FINALLY: fast and universal speech enhancement with studio-like quality",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=18RdkSv9h9",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=FINALLY%3A+fast+and+universal+speech+enhancement+with+studio-like+quality",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "fymr0CBDHZ",
            "title": "SLIM: Style-Linguistics Mismatch Model for Generalized Audio Deepfake Detection",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=fymr0CBDHZ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SLIM%3A+Style-Linguistics+Mismatch+Model+for+Generalized+Audio+Deepfake+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "IxEhb4NCvy",
            "title": "SSDM: Scalable Speech Dysfluency Modeling",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=IxEhb4NCvy",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SSDM%3A+Scalable+Speech+Dysfluency+Modeling",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "HDVsiUHQ1w",
            "title": "SCOREQ: Speech Quality Assessment with Contrastive Regression",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4502119412410401,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=HDVsiUHQ1w",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SCOREQ%3A+Speech+Quality+Assessment+with+Contrastive+Regression",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 18,
        "label": "convex optimization",
        "papers": [
          {
            "rank": 1,
            "paper_id": "wIlmx4bHrO",
            "title": "A Single-Loop Accelerated Extra-Gradient Difference Algorithm with Improved Complexity Bounds for Constrained Minimax Optimization",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 8.0,
            "avg_rating_z": 1.7630300741352136,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=wIlmx4bHrO",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+Single-Loop+Accelerated+Extra-Gradient+Difference+Algorithm+with+Improved+Complexity+Bounds+for+Constrained+Minimax+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "enlxHLwwFf",
            "title": "Functional Bilevel Optimization for Machine Learning",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=enlxHLwwFf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Functional+Bilevel+Optimization+for+Machine+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "znY173SCxu",
            "title": "Time-Reversed Dissipation Induces Duality Between Minimizing Gradient Norm and Function Value",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.5903813178344521,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=znY173SCxu",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Time-Reversed+Dissipation+Induces+Duality+Between+Minimizing+Gradient+Norm+and+Function+Value",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "aFOdln7jBV",
            "title": "An Accelerated Gradient Method for Convex Smooth Simple Bilevel Optimization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=aFOdln7jBV",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=An+Accelerated+Gradient+Method+for+Convex+Smooth+Simple+Bilevel+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "vIGNYQ4Alv",
            "title": "Accelerated Quasi-Newton Proximal Extragradient: Faster Rate for Smooth Convex Optimization",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=vIGNYQ4Alv",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Accelerated+Quasi-Newton+Proximal+Extragradient%3A+Faster+Rate+for+Smooth+Convex+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 19,
        "label": "federated fl clients client",
        "papers": [
          {
            "rank": 1,
            "paper_id": "xW6ga9i4eA",
            "title": "pFedClub: Controllable Heterogeneous Model Aggregation for Personalized Federated Learning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=xW6ga9i4eA",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=pFedClub%3A+Controllable+Heterogeneous+Model+Aggregation+for+Personalized+Federated+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "3YkeHuT1o6",
            "title": "A Swiss Army Knife for Heterogeneous Federated Learning: Flexible Coupling via Trace Norm",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.6750190739733303,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=3YkeHuT1o6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+Swiss+Army+Knife+for+Heterogeneous+Federated+Learning%3A+Flexible+Coupling+via+Trace+Norm",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "zpVCITHknd",
            "title": "Towards Personalized Federated Learning via Heterogeneous Model Reassembly",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=zpVCITHknd",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Towards+Personalized+Federated+Learning+via+Heterogeneous+Model+Reassembly",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "D6MQrw9HFu",
            "title": "FOOGD: Federated Collaboration for Both Out-of-distribution Generalization and Detection",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=D6MQrw9HFu",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=FOOGD%3A+Federated+Collaboration+for+Both+Out-of-distribution+Generalization+and+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "E7fZOoiEKl",
            "title": "FuseFL: One-Shot Federated Learning through the Lens of Causality with Progressive Model Fusion",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=E7fZOoiEKl",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=FuseFL%3A+One-Shot+Federated+Learning+through+the+Lens+of+Causality+with+Progressive+Model+Fusion",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 20,
        "label": "vision tokens and the",
        "papers": [
          {
            "rank": 1,
            "paper_id": "o7DOGbZeyP",
            "title": "LookHere: Vision Transformers with Directed Attention Generalize and Extrapolate",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=o7DOGbZeyP",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=LookHere%3A+Vision+Transformers+with+Directed+Attention+Generalize+and+Extrapolate",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "en4LGxpd9E",
            "title": "Getting ViT in Shape: Scaling Laws for Compute-Optimal Model Design",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=en4LGxpd9E",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Getting+ViT+in+Shape%3A+Scaling+Laws+for+Compute-Optimal+Model+Design",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "DQgTewaKzt",
            "title": "ZoomTrack: Target-aware Non-uniform Resizing for Efficient Visual Tracking",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2553388160342346,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=DQgTewaKzt",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=ZoomTrack%3A+Target-aware+Non-uniform+Resizing+for+Efficient+Visual+Tracking",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "e0SQ6wsHjv",
            "title": "Dynamic Tuning Towards Parameter and Inference Efficiency for ViT Adaptation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=e0SQ6wsHjv",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Dynamic+Tuning+Towards+Parameter+and+Inference+Efficiency+for+ViT+Adaptation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "B1vGiSgELw",
            "title": "Matryoshka Query Transformer for Large Vision-Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=B1vGiSgELw",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Matryoshka+Query+Transformer+for+Large+Vision-Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 21,
        "label": "video temporal understanding",
        "papers": [
          {
            "rank": 1,
            "paper_id": "eOonmxzzno",
            "title": "Temporal Sentence Grounding with Relevance Feedback in Videos",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=eOonmxzzno",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Temporal+Sentence+Grounding+with+Relevance+Feedback+in+Videos",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "PWzB2V2b6R",
            "title": "Does Video-Text Pretraining Help Open-Vocabulary Online Action Detection?",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=PWzB2V2b6R",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Does+Video-Text+Pretraining+Help+Open-Vocabulary+Online+Action+Detection%3F",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "J6Niv3yrMq",
            "title": "Glance and Focus: Memory Prompting for Multi-Event Video Question Answering",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 5.833333333333333,
            "avg_rating_z": -0.0517834772826314,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=J6Niv3yrMq",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Glance+and+Focus%3A+Memory+Prompting+for+Multi-Event+Video+Question+Answering",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "F8aSOovlEP",
            "title": "MECD: Unlocking Multi-Event Causal Discovery in Video Reasoning",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 5.75,
            "avg_rating_z": -0.0977554447939168,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=F8aSOovlEP",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=MECD%3A+Unlocking+Multi-Event+Causal+Discovery+in+Video+Reasoning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "WhE4C4fLbE",
            "title": "CHASE: Learning Convex Hull Adaptive Shift for Skeleton-based Multi-Entity Action Recognition",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 5.5,
            "avg_rating_z": -0.3085121317304387,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=WhE4C4fLbE",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=CHASE%3A+Learning+Convex+Hull+Adaptive+Shift+for+Skeleton-based+Multi-Entity+Action+Recognition",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 22,
        "label": "efficient attention / KV cache",
        "papers": [
          {
            "rank": 1,
            "paper_id": "ARAxPPIAhq",
            "title": "xLSTM: Extended Long Short-Term Memory",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 8.0,
            "avg_rating_z": 1.7990547376347803,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=ARAxPPIAhq",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=xLSTM%3A+Extended+Long+Short-Term+Memory",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "8Ofbg2KYMu",
            "title": "Faster Neighborhood Attention: Reducing the O(n^2) Cost of Self Attention at the Threadblock Level",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=8Ofbg2KYMu",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Faster+Neighborhood+Attention%3A+Reducing+the+O%28n%5E2%29+Cost+of+Self+Attention+at+the+Threadblock+Level",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "aQv5AbN1wF",
            "title": "On Feature Learning in Structured State Space Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=aQv5AbN1wF",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+Feature+Learning+in+Structured+State+Space+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "4xDxVQHsbZ",
            "title": "NoMAD-Attention: Efficient LLM Inference on CPUs Through Multiply-add-free Attention",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=4xDxVQHsbZ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=NoMAD-Attention%3A+Efficient+LLM+Inference+on+CPUs+Through+Multiply-add-free+Attention",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "3SzrqwupUx",
            "title": "Theoretical Foundations of Deep Selective State-Space Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=3SzrqwupUx",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Theoretical+Foundations+of+Deep+Selective+State-Space+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 23,
        "label": "LLM safety / jailbreaks",
        "papers": [
          {
            "rank": 1,
            "paper_id": "jXs6Cvpe7k",
            "title": "Robust Prompt Optimization for Defending Language Models Against Jailbreaking Attacks",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=jXs6Cvpe7k",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Robust+Prompt+Optimization+for+Defending+Language+Models+Against+Jailbreaking+Attacks",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "u9ShP64FJV",
            "title": "Protecting Your LLMs with Information Bottleneck",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=u9ShP64FJV",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Protecting+Your+LLMs+with+Information+Bottleneck",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "qAP6RyYIJc",
            "title": "Stealth edits to large language models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=qAP6RyYIJc",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Stealth+edits+to+large+language+models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "cw5mgd71jW",
            "title": "Many-shot Jailbreaking",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4502119412410401,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=cw5mgd71jW",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Many-shot+Jailbreaking",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "1PcJ5Evta7",
            "title": "BackdoorAlign: Mitigating Fine-tuning based Jailbreak Attack with Backdoor Enhanced Safety Alignment",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=1PcJ5Evta7",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=BackdoorAlign%3A+Mitigating+Fine-tuning+based+Jailbreak+Attack+with+Backdoor+Enhanced+Safety+Alignment",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 24,
        "label": "statistical learning theory",
        "papers": [
          {
            "rank": 1,
            "paper_id": "T0e4Nw09XX",
            "title": "Universal Rates for Active Learning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=T0e4Nw09XX",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Universal+Rates+for+Active+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "cRGINXQWem",
            "title": "Precise asymptotic generalization for multiclass classification with overparameterized linear models",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2046259044681842,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=cRGINXQWem",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Precise+asymptotic+generalization+for+multiclass+classification+with+overparameterized+linear+models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "7Dep87TMJs",
            "title": "Learning with Fitzpatrick Losses",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7874226403394753,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=7Dep87TMJs",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+with+Fitzpatrick+Losses",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "6cWDg9t3z5",
            "title": "Universal Rates of Empirical Risk Minimization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7874226403394753,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=6cWDg9t3z5",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Universal+Rates+of+Empirical+Risk+Minimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "4KZhZJSPYU",
            "title": "When Does Confidence-Based Cascade Deferral Suffice?",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.757902568734561,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=4KZhZJSPYU",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=When+Does+Confidence-Based+Cascade+Deferral+Suffice%3F",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 25,
        "label": "game theory / equilibria",
        "papers": [
          {
            "rank": 1,
            "paper_id": "hK7XTpCtBi",
            "title": "Fast Last-Iterate Convergence of Learning in Games Requires Forgetful Algorithms",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=hK7XTpCtBi",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Fast+Last-Iterate+Convergence+of+Learning+in+Games+Requires+Forgetful+Algorithms",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "3CtTMF5zzM",
            "title": "On Tractable $\\Phi$-Equilibria in Non-Concave Games",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=3CtTMF5zzM",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+Tractable+%24%5CPhi%24-Equilibria+in+Non-Concave+Games",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "nYgs0qZJ97",
            "title": "Regret Matching+: (In)Stability and Fast Convergence in Games",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9254238196346696,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=nYgs0qZJ97",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Regret+Matching%2B%3A+%28In%29Stability+and+Fast+Convergence+in+Games",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "HW9S9vY5gZ",
            "title": "No-regret Learning in Harmonic Games: Extrapolation in the Face of Conflicting Interests",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=HW9S9vY5gZ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=No-regret+Learning+in+Harmonic+Games%3A+Extrapolation+in+the+Face+of+Conflicting+Interests",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "mZwilh3hd2",
            "title": "Polynomial-Time Computation of Exact $\\Phi$-Equilibria in Polyhedral Games",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=mZwilh3hd2",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Polynomial-Time+Computation+of+Exact+%24%5CPhi%24-Equilibria+in+Polyhedral+Games",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 26,
        "label": "video motion generation temporal",
        "papers": [
          {
            "rank": 1,
            "paper_id": "VFqzxhINFU",
            "title": "StoryDiffusion: Consistent Self-Attention for Long-Range Image and Video Generation",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=VFqzxhINFU",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=StoryDiffusion%3A+Consistent+Self-Attention+for+Long-Range+Image+and+Video+Generation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "YdfZP7qMzp",
            "title": "GenRec: Unifying Video Generation and Recognition with Diffusion Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2816065916918225,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=YdfZP7qMzp",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=GenRec%3A+Unifying+Video+Generation+and+Recognition+with+Diffusion+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "o9Lkiv1qpc",
            "title": "Identifying and Solving Conditional Image Leakage in Image-to-Video Diffusion Model",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=o9Lkiv1qpc",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Identifying+and+Solving+Conditional+Image+Leakage+in+Image-to-Video+Diffusion+Model",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "NsqxN9iOJ7",
            "title": "Motion Consistency Model: Accelerating Video Diffusion with Disentangled Motion-Appearance Distillation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=NsqxN9iOJ7",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Motion+Consistency+Model%3A+Accelerating+Video+Diffusion+with+Disentangled+Motion-Appearance+Distillation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "xUjBZR6b1T",
            "title": "ReVideo: Remake a Video with Motion and Content Control",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=xUjBZR6b1T",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=ReVideo%3A+Remake+a+Video+with+Motion+and+Content+Control",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 27,
        "label": "Bayesian inference",
        "papers": [
          {
            "rank": 1,
            "paper_id": "HfQF8LoLhs",
            "title": "Asymptotics of Alpha-Divergence Variational Inference Algorithms with Exponential Families",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=HfQF8LoLhs",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Asymptotics+of+Alpha-Divergence+Variational+Inference+Algorithms+with+Exponential+Families",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "dHQ2av9NzO",
            "title": "On the Convergence of Black-Box Variational Inference",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9254238196346696,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=dHQ2av9NzO",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+the+Convergence+of+Black-Box+Variational+Inference",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "wLiMhVJ7fx",
            "title": "Calibrating Neural Simulation-Based Inference with Differentiable Coverage Probability",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=wLiMhVJ7fx",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Calibrating+Neural+Simulation-Based+Inference+with+Differentiable+Coverage+Probability",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "2Cmdh5z6ph",
            "title": "Discriminative Calibration: Check Bayesian Computation from Simulations and Flexible Classifier",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=2Cmdh5z6ph",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Discriminative+Calibration%3A+Check+Bayesian+Computation+from+Simulations+and+Flexible+Classifier",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "f71xXsoG1v",
            "title": "Provable convergence guarantees for black-box variational inference",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.5903813178344521,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=f71xXsoG1v",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Provable+convergence+guarantees+for+black-box+variational+inference",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 28,
        "label": "problems optimization combinatorial search",
        "papers": [
          {
            "rank": 1,
            "paper_id": "sTjW3JHs2V",
            "title": "Let the Flows Tell:  Solving Graph Combinatorial Problems with GFlowNets",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=sTjW3JHs2V",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Let+the+Flows+Tell%3A++Solving+Graph+Combinatorial+Problems+with+GFlowNets",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "DoewNm2uT3",
            "title": "Neural Combinatorial Optimization for Robust Routing Problem with Uncertain Travel Times",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2816065916918226,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=DoewNm2uT3",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Neural+Combinatorial+Optimization+for+Robust+Routing+Problem+with+Uncertain+Travel+Times",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "buqvMT3B4k",
            "title": "Self-Labeling the Job Shop Scheduling Problem",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=buqvMT3B4k",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Self-Labeling+the+Job+Shop+Scheduling+Problem",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "593fc38lhN",
            "title": "Efficient Meta Neural Heuristic for Multi-Objective Combinatorial Optimization",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.0878175651341258,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=593fc38lhN",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Efficient+Meta+Neural+Heuristic+for+Multi-Objective+Combinatorial+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "q1JukwH2yP",
            "title": "Learning to Search Feasible and Infeasible Regions of Routing Problems with Flexible Neural k-Opt",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.0878175651341258,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=q1JukwH2yP",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+to+Search+Feasible+and+Infeasible+Regions+of+Routing+Problems+with+Flexible+Neural+k-Opt",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 29,
        "label": "matrix algorithms",
        "papers": [
          {
            "rank": 1,
            "paper_id": "ca2QmdOlIh",
            "title": "Bayesian Extensive-Rank Matrix Factorization with Rotational Invariant Priors",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3442269468849417,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=ca2QmdOlIh",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Bayesian+Extensive-Rank+Matrix+Factorization+with+Rotational+Invariant+Priors",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "NgyT80IPUK",
            "title": "Matrix Denoising with Doubly Heteroscedastic Noise: Fundamental Limits and Optimal Spectral Methods",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.333333333333333,
            "avg_rating_z": 1.2370369058040551,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=NgyT80IPUK",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Matrix+Denoising+with+Doubly+Heteroscedastic+Noise%3A+Fundamental+Limits+and+Optimal+Spectral+Methods",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "ZGN8dOhpi6",
            "title": "A Pairwise Pseudo-likelihood Approach for Matrix Completion with Informative Missingness",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=ZGN8dOhpi6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+Pairwise+Pseudo-likelihood+Approach+for+Matrix+Completion+with+Informative+Missingness",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "3s8V8QP9XV",
            "title": "Nearly Optimal Approximation of Matrix Functions by the Lanczos Method",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7874226403394753,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=3s8V8QP9XV",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Nearly+Optimal+Approximation+of+Matrix+Functions+by+the+Lanczos+Method",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "gITGmIEinf",
            "title": "Approximating the Top Eigenvector in Random Order Streams",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=gITGmIEinf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Approximating+the+Top+Eigenvector+in+Random+Order+Streams",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 30,
        "label": "fairness fair groups in",
        "papers": [
          {
            "rank": 1,
            "paper_id": "nzkWhoXUpv",
            "title": "Individual Arbitrariness and Group Fairness",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1348253832598056,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=nzkWhoXUpv",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Individual+Arbitrariness+and+Group+Fairness",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "GtEmIzLZmR",
            "title": "Achievable Fairness on Your Data With Utility Guarantees",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.6750190739733303,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=GtEmIzLZmR",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Achievable+Fairness+on+Your+Data+With+Utility+Guarantees",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "J0Itri0UiN",
            "title": "Counterfactual Fairness by Combining Factual and Counterfactual Predictions",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=J0Itri0UiN",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Counterfactual+Fairness+by+Combining+Factual+and+Counterfactual+Predictions",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "ylceJ2xIw5",
            "title": "Fair Wasserstein Coresets",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=ylceJ2xIw5",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Fair+Wasserstein+Coresets",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "wwkQUiaKbo",
            "title": "Adapting Fairness Interventions to Missing Values",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2553388160342346,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=wwkQUiaKbo",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Adapting+Fairness+Interventions+to+Missing+Values",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 31,
        "label": "label labels the noisy",
        "papers": [
          {
            "rank": 1,
            "paper_id": "AqcPvWwktK",
            "title": "Semi-supervised Multi-label Learning with Balanced Binary Angular Margin Loss",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=AqcPvWwktK",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Semi-supervised+Multi-label+Learning+with+Balanced+Binary+Angular+Margin+Loss",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "4RoD1o7yq6",
            "title": "Binary Classification with Confidence Difference",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=4RoD1o7yq6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Binary+Classification+with+Confidence+Difference",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "JpqEzPTuv6",
            "title": "What Makes Partial-Label Learning Algorithms Effective?",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4502119412410401,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=JpqEzPTuv6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=What+Makes+Partial-Label+Learning+Algorithms+Effective%3F",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "2NKumsITFw",
            "title": "Learning from Noisy Labels via Conditional Distributionally Robust Optimization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=2NKumsITFw",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+from+Noisy+Labels+via+Conditional+Distributionally+Robust+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "wnPlJNiqfA",
            "title": "KFNN: K-Free Nearest Neighbor For Crowdsourcing",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=wnPlJNiqfA",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=KFNN%3A+K-Free+Nearest+Neighbor+For+Crowdsourcing",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 32,
        "label": "continual forgetting knowledge unlearning",
        "papers": [
          {
            "rank": 1,
            "paper_id": "opaRhDvQRD",
            "title": "Forgetting, Ignorance or Myopia: Revisiting Key Challenges in Online Continual Learning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886926,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=opaRhDvQRD",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Forgetting%2C+Ignorance+or+Myopia%3A+Revisiting+Key+Challenges+in+Online+Continual+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "P6aJ7BqYlc",
            "title": "GACL: Exemplar-Free Generalized Analytic Continual Learning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=P6aJ7BqYlc",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=GACL%3A+Exemplar-Free+Generalized+Analytic+Continual+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "9XieH21Tlf",
            "title": "Hierarchical Decomposition of Prompt-Based Continual Learning: Rethinking Obscured Sub-optimality",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4228600669343434,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=9XieH21Tlf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Hierarchical+Decomposition+of+Prompt-Based+Continual+Learning%3A+Rethinking+Obscured+Sub-optimality",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "TZ5k9IYBBf",
            "title": "RanDumb: Random Representations Outperform Online Continually Learned Representations",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=TZ5k9IYBBf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=RanDumb%3A+Random+Representations+Outperform+Online+Continually+Learned+Representations",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "LswqtKU9op",
            "title": "Prompt-augmented Temporal Point Process for Streaming Event Sequence",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.2972191287592618,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=LswqtKU9op",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Prompt-augmented+Temporal+Point+Process+for+Streaming+Event+Sequence",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 33,
        "label": "knowledge retrieval rag query",
        "papers": [
          {
            "rank": 1,
            "paper_id": "S1fc92uemC",
            "title": "RankRAG: Unifying Context Ranking with Retrieval-Augmented Generation in LLMs",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886926,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=S1fc92uemC",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=RankRAG%3A+Unifying+Context+Ranking+with+Retrieval-Augmented+Generation+in+LLMs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "bkUvKPKafQ",
            "title": "ChatQA: Surpassing GPT-4 on Conversational QA and RAG",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=bkUvKPKafQ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=ChatQA%3A+Surpassing+GPT-4+on+Conversational+QA+and+RAG",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "VQyb9LKmUH",
            "title": "A Prompt-Based Knowledge Graph Foundation Model for Universal In-Context Reasoning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.6750190739733303,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=VQyb9LKmUH",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+Prompt-Based+Knowledge+Graph+Foundation+Model+for+Universal+In-Context+Reasoning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "BpJ6OTfWw3",
            "title": "Clustering then Propagation: Select Better Anchors for Knowledge Graph Embedding",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=BpJ6OTfWw3",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Clustering+then+Propagation%3A+Select+Better+Anchors+for+Knowledge+Graph+Embedding",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "hkujvAPVsg",
            "title": "HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=hkujvAPVsg",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=HippoRAG%3A+Neurobiologically+Inspired+Long-Term+Memory+for+Large+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 34,
        "label": "communication distributed federated convergence",
        "papers": [
          {
            "rank": 1,
            "paper_id": "IUKff7nYmW",
            "title": "Lower Bounds and Optimal Algorithms for Non-Smooth Convex Decentralized Optimization over Time-Varying Networks",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1667846768252146,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=IUKff7nYmW",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Lower+Bounds+and+Optimal+Algorithms+for+Non-Smooth+Convex+Decentralized+Optimization+over+Time-Varying+Networks",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "WukSyFSzDt",
            "title": "Stabilized Proximal-Point Methods for Federated Optimization",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7874226403394753,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=WukSyFSzDt",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Stabilized+Proximal-Point+Methods+for+Federated+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "uaNZvF1VFe",
            "title": "Efficient Sign-Based Optimization: Accelerating Convergence via Variance Reduction",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=uaNZvF1VFe",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Efficient+Sign-Based+Optimization%3A+Accelerating+Convergence+via+Variance+Reduction",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "MirclT6zpv",
            "title": "Delayed Algorithms for Distributed Stochastic Weakly Convex Optimization",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4228600669343434,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=MirclT6zpv",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Delayed+Algorithms+for+Distributed+Stochastic+Weakly+Convex+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "HeJ1cBAgiV",
            "title": "SCAFFLSA: Taming Heterogeneity in Federated Linear Stochastic Approximation and TD Learning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=HeJ1cBAgiV",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SCAFFLSA%3A+Taming+Heterogeneity+in+Federated+Linear+Stochastic+Approximation+and+TD+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 35,
        "label": "medical image segmentation",
        "papers": [
          {
            "rank": 1,
            "paper_id": "105ZuvpdyW",
            "title": "SegVol: Universal and Interactive Volumetric Medical Image Segmentation",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.666666666666667,
            "avg_rating_z": 1.5180458217194177,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=105ZuvpdyW",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SegVol%3A+Universal+and+Interactive+Volumetric+Medical+Image+Segmentation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "xE7oH5iVGK",
            "title": "LVM-Med: Learning Large-Scale Self-Supervised Vision Models for Medical Imaging via Second-order Graph Matching",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9254238196346696,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=xE7oH5iVGK",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=LVM-Med%3A+Learning+Large-Scale+Self-Supervised+Vision+Models+for+Medical+Imaging+via+Second-order+Graph+Matching",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "qlnlamFQEa",
            "title": "Aligning Synthetic Medical Images with Clinical Knowledge using Human Feedback",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.757902568734561,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=qlnlamFQEa",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Aligning+Synthetic+Medical+Images+with+Clinical+Knowledge+using+Human+Feedback",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "STrpbhrvt3",
            "title": "A Textbook Remedy for Domain Shifts: Knowledge Priors for Medical Image Analysis",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=STrpbhrvt3",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+Textbook+Remedy+for+Domain+Shifts%3A+Knowledge+Priors+for+Medical+Image+Analysis",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "Xp8qhdmeb4",
            "title": "E2ENet: Dynamic Sparse Feature Fusion for Accurate and Efficient 3D Medical Image Segmentation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Xp8qhdmeb4",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=E2ENet%3A+Dynamic+Sparse+Feature+Fusion+for+Accurate+and+Efficient+3D+Medical+Image+Segmentation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 36,
        "label": "agents LLMs agent language",
        "papers": [
          {
            "rank": 1,
            "paper_id": "dG1HwKMYbC",
            "title": "FinCon: A Synthesized LLM Multi-Agent System with Conceptual Verbal Reinforcement for Enhanced Financial Decision Making",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.67501907397333,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=dG1HwKMYbC",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=FinCon%3A+A+Synthesized+LLM+Multi-Agent+System+with+Conceptual+Verbal+Reinforcement+for+Enhanced+Financial+Decision+Making",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "jU9qiRMDtR",
            "title": "SPRING: Studying Papers and Reasoning to play Games",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843977,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=jU9qiRMDtR",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SPRING%3A+Studying+Papers+and+Reasoning+to+play+Games",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "kEPpD7yETM",
            "title": "Large Language Models Play StarCraft II:Benchmarks and A Chain of Summarization Approach",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=kEPpD7yETM",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Large+Language+Models+Play+StarCraft+II%3ABenchmarks+and+A+Chain+of+Summarization+Approach",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "DRC9pZwBwR",
            "title": "Recursive Introspection: Teaching Language Model Agents How to Self-Improve",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=DRC9pZwBwR",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Recursive+Introspection%3A+Teaching+Language+Model+Agents+How+to+Self-Improve",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "vAElhFcKW6",
            "title": "Reflexion: language agents with verbal reinforcement learning",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2553388160342346,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=vAElhFcKW6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Reflexion%3A+language+agents+with+verbal+reinforcement+learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 37,
        "label": "LoRA / low-rank finetuning",
        "papers": [
          {
            "rank": 1,
            "paper_id": "6ZBHIEtdP4",
            "title": "PiSSA: Principal Singular Values and Singular Vectors Adaptation of Large Language Models",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3775413637617366,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=6ZBHIEtdP4",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=PiSSA%3A+Principal+Singular+Values+and+Singular+Vectors+Adaptation+of+Large+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "kuCY0mW4Q3",
            "title": "VB-LoRA: Extreme Parameter Efficient Fine-Tuning with Vector Banks",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=kuCY0mW4Q3",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=VB-LoRA%3A+Extreme+Parameter+Efficient+Fine-Tuning+with+Vector+Banks",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "L8ifDX5XNq",
            "title": "LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=L8ifDX5XNq",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=LISA%3A+Layerwise+Importance+Sampling+for+Memory-Efficient+Large+Language+Model+Fine-Tuning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "VaLAWrLHJv",
            "title": "LoRA-GA: Low-Rank Adaptation with Gradient Approximation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=VaLAWrLHJv",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=LoRA-GA%3A+Low-Rank+Adaptation+with+Gradient+Approximation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "sn3UrYRItk",
            "title": "The Impact of Initialization on LoRA Finetuning Dynamics",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=sn3UrYRItk",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=The+Impact+of+Initialization+on+LoRA+Finetuning+Dynamics",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 38,
        "label": "watermarking watermark watermarks image",
        "papers": [
          {
            "rank": 1,
            "paper_id": "7hy5fy2OC6",
            "title": "Invisible Image Watermarks Are Provably Removable Using Generative AI",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=7hy5fy2OC6",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Invisible+Image+Watermarks+Are+Provably+Removable+Using+Generative+AI",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "FZ45kf5pIA",
            "title": "Edit Distance Robust Watermarks via Indexing Pseudorandom Codes",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=FZ45kf5pIA",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Edit+Distance+Robust+Watermarks+via+Indexing+Pseudorandom+Codes",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "6YKMBUiIsG",
            "title": "Inevitable Trade-off between Watermark Strength and Speculative Sampling Efficiency for Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=6YKMBUiIsG",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Inevitable+Trade-off+between+Watermark+Strength+and+Speculative+Sampling+Efficiency+for+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "HjeKHxK2VH",
            "title": "WaterMax: breaking the LLM watermark detectability-robustness-quality trade-off",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=HjeKHxK2VH",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=WaterMax%3A+breaking+the+LLM+watermark+detectability-robustness-quality+trade-off",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "RvoxlFvnlX",
            "title": "ROBIN: Robust and Invisible Watermarks for Diffusion Models with Adversarial Optimization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=RvoxlFvnlX",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=ROBIN%3A+Robust+and+Invisible+Watermarks+for+Diffusion+Models+with+Adversarial+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 39,
        "label": "clustering / approximation algorithms",
        "papers": [
          {
            "rank": 1,
            "paper_id": "MFWgLCWgUB",
            "title": "Random Cuts are Optimal for Explainable k-Medians",
            "year": 2023,
            "decision_tier": "Accept (oral)",
            "avg_rating": 8.0,
            "avg_rating_z": 1.7630300741352134,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=MFWgLCWgUB",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Random+Cuts+are+Optimal+for+Explainable+k-Medians",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "lgtsXxk4dF",
            "title": "Clustering with Non-adaptive Subset Queries",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=lgtsXxk4dF",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Clustering+with+Non-adaptive+Subset+Queries",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "5VE1iLeYOz",
            "title": "Efficient Centroid-Linkage Clustering",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=5VE1iLeYOz",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Efficient+Centroid-Linkage+Clustering",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "Actjv6Wect",
            "title": "Proportional Fairness in Non-Centroid Clustering",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Actjv6Wect",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Proportional+Fairness+in+Non-Centroid+Clustering",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "8XRMbNAP6Z",
            "title": "Near-Optimal $k$-Clustering in the Sliding Window Model",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9254238196346696,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=8XRMbNAP6Z",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Near-Optimal+%24k%24-Clustering+in+the+Sliding+Window+Model",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 40,
        "label": "anomaly detection anomalies normal",
        "papers": [
          {
            "rank": 1,
            "paper_id": "8VKxTlnejE",
            "title": "MambaAD: Exploring State Space Models for Multi-class Unsupervised Anomaly Detection",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=8VKxTlnejE",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=MambaAD%3A+Exploring+State+Space+Models+for+Multi-class+Unsupervised+Anomaly+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "zNiJZUAlxg",
            "title": "ResAD: A Simple Framework for Class Generalizable Anomaly Detection",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=zNiJZUAlxg",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=ResAD%3A+A+Simple+Framework+for+Class+Generalizable+Anomaly+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "aW5bSuduF1",
            "title": "Drift doesn't Matter: Dynamic Decomposition with Diffusion Reconstruction for Unstable Multivariate Time Series Anomaly Detection",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.0878175651341258,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=aW5bSuduF1",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Drift+doesn%27t+Matter%3A+Dynamic+Decomposition+with+Diffusion+Reconstruction+for+Unstable+Multivariate+Time+Series+Anomaly+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "gmf5Aj01Hz",
            "title": "SARAD: Spatial Association-Aware Anomaly Detection and Diagnosis for Multivariate Time Series",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 5.75,
            "avg_rating_z": -0.0977554447939168,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=gmf5Aj01Hz",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SARAD%3A+Spatial+Association-Aware+Anomaly+Detection+and+Diagnosis+for+Multivariate+Time+Series",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "UFW67uduJd",
            "title": "MEMTO: Memory-guided Transformer for Multivariate Time Series Anomaly Detection",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 5.75,
            "avg_rating_z": -0.12158399849101,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=UFW67uduJd",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=MEMTO%3A+Memory-guided+Transformer+for+Multivariate+Time+Series+Anomaly+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 41,
        "label": "equivariant symmetries group symmetry",
        "papers": [
          {
            "rank": 1,
            "paper_id": "L86glqNCUj",
            "title": "Symmetries in Overparametrized Neural Networks: A Mean Field View",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=L86glqNCUj",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Symmetries+in+Overparametrized+Neural+Networks%3A+A+Mean+Field+View",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "bNIHdyunFC",
            "title": "Learning Layer-wise Equivariances Automatically using Gradients",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=bNIHdyunFC",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+Layer-wise+Equivariances+Automatically+using+Gradients",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "8lbFwpebeu",
            "title": "Investigating how ReLU-networks encode symmetries",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.5903813178344521,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=8lbFwpebeu",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Investigating+how+ReLU-networks+encode+symmetries",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "DnO6LTQ77U",
            "title": "Approximation-Generalization Trade-offs under (Approximate) Group Equivariance",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=DnO6LTQ77U",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Approximation-Generalization+Trade-offs+under+%28Approximate%29+Group+Equivariance",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "2FMJtNDLeE",
            "title": "A General Theory of Correct, Incorrect, and Extrinsic Equivariance",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3670196499676404,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=2FMJtNDLeE",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=A+General+Theory+of+Correct%2C+Incorrect%2C+and+Extrinsic+Equivariance",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 42,
        "label": "backdoor attacks attack defense",
        "papers": [
          {
            "rank": 1,
            "paper_id": "Kl13lipxTW",
            "title": "BackTime: Backdoor Attacks on Multivariate Time Series Forecasting",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Kl13lipxTW",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=BackTime%3A+Backdoor+Attacks+on+Multivariate+Time+Series+Forecasting",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "VFhN15Vlkj",
            "title": "Neural Polarizer: A Lightweight and Effective Backdoor Defense via Purifying Poisoned Features",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.2972191287592618,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=VFhN15Vlkj",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Neural+Polarizer%3A+A+Lightweight+and+Effective+Backdoor+Defense+via+Purifying+Poisoned+Features",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "Y6RV6z98Pk",
            "title": "SampDetox: Black-box Backdoor Defense via Perturbation-based Sample Detoxification",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2816065916918226,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Y6RV6z98Pk",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SampDetox%3A+Black-box+Backdoor+Defense+via+Perturbation-based+Sample+Detoxification",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "H1CQZqpgdQ",
            "title": "CBD: A Certified Backdoor Detector Based on Local Dominant Probability",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2553388160342346,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=H1CQZqpgdQ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=CBD%3A+A+Certified+Backdoor+Detector+Based+on+Local+Dominant+Probability",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "KyVBzkConO",
            "title": "Injecting Undetectable Backdoors in Obfuscated Neural Networks and Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=KyVBzkConO",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Injecting+Undetectable+Backdoors+in+Obfuscated+Neural+Networks+and+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 43,
        "label": "ood detection outofdistribution id",
        "papers": [
          {
            "rank": 1,
            "paper_id": "VLQYtVMTYz",
            "title": "Energy-based Hopfield Boosting for Out-of-Distribution Detection",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=VLQYtVMTYz",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Energy-based+Hopfield+Boosting+for+Out-of-Distribution+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "OtU6VvXJue",
            "title": "Learning to Augment Distributions for Out-of-distribution Detection",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7160222560095337,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=OtU6VvXJue",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+to+Augment+Distributions+for+Out-of-distribution+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "A5pabdZp2F",
            "title": "MultiOOD: Scaling Out-of-Distribution Detection for Multiple Modalities",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.6750190739733303,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=A5pabdZp2F",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=MultiOOD%3A+Scaling+Out-of-Distribution+Detection+for+Multiple+Modalities",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "A86JTXllHa",
            "title": "On the Importance of Feature Separability in Predicting Out-Of-Distribution Error",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=A86JTXllHa",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+the+Importance+of+Feature+Separability+in+Predicting+Out-Of-Distribution+Error",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "HZQZli6amV",
            "title": "ID and OOD Performance Are Sometimes Inversely Correlated on Real-world Datasets",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4228600669343434,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=HZQZli6amV",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=ID+and+OOD+Performance+Are+Sometimes+Inversely+Correlated+on+Real-world+Datasets",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 44,
        "label": "conformal prediction coverage sets",
        "papers": [
          {
            "rank": 1,
            "paper_id": "kkmPe0rzY1",
            "title": "Robust Conformal Prediction Using Privileged Information",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=kkmPe0rzY1",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Robust+Conformal+Prediction+Using+Privileged+Information",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "YI4bn6aAmz",
            "title": "Conformal Prediction Sets for Ordinal Classification",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=YI4bn6aAmz",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Conformal+Prediction+Sets+for+Ordinal+Classification",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "eP6cDDwBNC",
            "title": "TRIAGE: Characterizing and auditing training data for improved regression",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.4,
            "avg_rating_z": 0.4228600669343434,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=eP6cDDwBNC",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=TRIAGE%3A+Characterizing+and+auditing+training+data+for+improved+regression",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "KNZYJ5zQsG",
            "title": "Generalized Fast Exact Conformalization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2816065916918226,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=KNZYJ5zQsG",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Generalized+Fast+Exact+Conformalization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "gKLgY3m9zj",
            "title": "An Information Theoretic Perspective on Conformal Prediction",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=gKLgY3m9zj",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=An+Information+Theoretic+Perspective+on+Conformal+Prediction",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 45,
        "label": "recommender systems",
        "papers": [
          {
            "rank": 1,
            "paper_id": "xojbzSYIVS",
            "title": "LLM-ESR: Large Language Models Enhancement for Long-tailed Sequential Recommendation",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.6750190739733303,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=xojbzSYIVS",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=LLM-ESR%3A+Large+Language+Models+Enhancement+for+Long-tailed+Sequential+Recommendation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "h3BdT2UMWQ",
            "title": "Breaking Determinism: Fuzzy Modeling of Sequential Recommendation Using Discrete State Space Diffusion Model",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=h3BdT2UMWQ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Breaking+Determinism%3A+Fuzzy+Modeling+of+Sequential+Recommendation+Using+Discrete+State+Space+Diffusion+Model",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "JyWAFGCJPl",
            "title": "Fine Tuning Out-of-Vocabulary Item Recommendation with User Sequence Imagination",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=JyWAFGCJPl",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Fine+Tuning+Out-of-Vocabulary+Item+Recommendation+with+User+Sequence+Imagination",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "mHsxsrLl0y",
            "title": "Theoretically Guaranteed Bidirectional Data Rectification for Robust Sequential Recommendation",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2553388160342346,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=mHsxsrLl0y",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Theoretically+Guaranteed+Bidirectional+Data+Rectification+for+Robust+Sequential+Recommendation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "Px1hQM72iX",
            "title": "Density-based User Representation using Gaussian Process Regression for Multi-interest Personalized Retrieval",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.113001242142605,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Px1hQM72iX",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Density-based+User+Representation+using+Gaussian+Process+Regression+for+Multi-interest+Personalized+Retrieval",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 46,
        "label": "language LLMs of the",
        "papers": [
          {
            "rank": 1,
            "paper_id": "0NMzBwqaAJ",
            "title": "Not All Tokens Are What You Need for Pretraining",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.666666666666667,
            "avg_rating_z": 1.518045821719418,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=0NMzBwqaAJ",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Not+All+Tokens+Are+What+You+Need+for+Pretraining",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "pASJxzMJb7",
            "title": "Zipfian Whitening",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=pASJxzMJb7",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Zipfian+Whitening",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "RwBObRsIzC",
            "title": "Zero-Shot Tokenizer Transfer",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.666666666666667,
            "avg_rating_z": 0.6750190739733303,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=RwBObRsIzC",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Zero-Shot+Tokenizer+Transfer",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "CEk6JK71Mb",
            "title": "Meet in the Middle: A New Pre-training Paradigm",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.5903813178344521,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=CEk6JK71Mb",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Meet+in+the+Middle%3A+A+New+Pre-training+Paradigm",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "KEe4IUp20I",
            "title": "SpaceByte: Towards Deleting Tokenization from Large Language Modeling",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=KEe4IUp20I",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=SpaceByte%3A+Towards+Deleting+Tokenization+from+Large+Language+Modeling",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 47,
        "label": "quantum classical of the",
        "papers": [
          {
            "rank": 1,
            "paper_id": "WTLvXdzhmP",
            "title": "Statistical Estimation in the Spiked Tensor Model via the Quantum Approximate Optimization Algorithm",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.2,
            "avg_rating_z": 1.1246333394379104,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=WTLvXdzhmP",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Statistical+Estimation+in+the+Spiked+Tensor+Model+via+the+Quantum+Approximate+Optimization+Algorithm",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "XCkII8nCt3",
            "title": "Non-asymptotic Approximation Error Bounds of Parameterized Quantum Circuits",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=XCkII8nCt3",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Non-asymptotic+Approximation+Error+Bounds+of+Parameterized+Quantum+Circuits",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "6gcY0MGNhj",
            "title": "Statistical Analysis of Quantum State Learning Process in Quantum Neural Networks",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.7579025687345609,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=6gcY0MGNhj",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Statistical+Analysis+of+Quantum+State+Learning+Process+in+Quantum+Neural+Networks",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "4aIpgq1nuI",
            "title": "What Makes Data Suitable for a Locally Connected Neural Network? A Necessary and Sufficient Condition Based on Quantum Entanglement.",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.5903813178344521,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=4aIpgq1nuI",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=What+Makes+Data+Suitable+for+a+Locally+Connected+Neural+Network%3F+A+Necessary+and+Sufficient+Condition+Based+on+Quantum+Entanglement.",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "IKQOS8rqwr",
            "title": "QuACK: Accelerating Gradient-Based Quantum Optimization with Koopman Operator Learning",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=IKQOS8rqwr",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=QuACK%3A+Accelerating+Gradient-Based+Quantum+Optimization+with+Koopman+Operator+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 48,
        "label": "pruning sparsity compression sparse",
        "papers": [
          {
            "rank": 1,
            "paper_id": "Llu9nJal7b",
            "title": "MaskLLM: Learnable Semi-Structured Sparsity for Large Language Models",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3775413637617366,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Llu9nJal7b",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=MaskLLM%3A+Learnable+Semi-Structured+Sparsity+for+Large+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "9U0nLnNMJ7",
            "title": "Compact Language Models via Pruning and Knowledge Distillation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.0,
            "avg_rating_z": 0.9560279898886928,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=9U0nLnNMJ7",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Compact+Language+Models+via+Pruning+and+Knowledge+Distillation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "RwK0tgfptL",
            "title": "Shaving Weights with Occam's Razor: Bayesian Sparsification for Neural Networks using the Marginal Likelihood",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=RwK0tgfptL",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Shaving+Weights+with+Occam%27s+Razor%3A+Bayesian+Sparsification+for+Neural+Networks+using+the+Marginal+Likelihood",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "ktpG37Dzh5",
            "title": "BMRS: Bayesian Model Reduction for Structured Pruning",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.333333333333333,
            "avg_rating_z": 0.3940101580579676,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=ktpG37Dzh5",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=BMRS%3A+Bayesian+Model+Reduction+for+Structured+Pruning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "Jup0qZxH7U",
            "title": "Adaptive Layer Sparsity for Large Language Models via Activation Correlation Assessment",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Jup0qZxH7U",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Adaptive+Layer+Sparsity+for+Large+Language+Models+via+Activation+Correlation+Assessment",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 49,
        "label": "hallucination in LVLMs",
        "papers": [
          {
            "rank": 1,
            "paper_id": "NrwASKGm7A",
            "title": "ANAH-v2: Scaling Analytical Hallucination Annotation of Large Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=NrwASKGm7A",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=ANAH-v2%3A+Scaling+Analytical+Hallucination+Annotation+of+Large+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "9GhSOp1LYH",
            "title": "Leveraging Hallucinations to Reduce Manual Prompt Dependency in Promptable Segmentation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.25,
            "avg_rating_z": 0.323757929079127,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=9GhSOp1LYH",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Leveraging+Hallucinations+to+Reduce+Manual+Prompt+Dependency+in+Promptable+Segmentation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "KNrwaFEi1u",
            "title": "Multi-Object Hallucination in Vision Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=KNrwaFEi1u",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Multi-Object+Hallucination+in+Vision+Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "yQL5tutdaH",
            "title": "Toward a Stable, Fair, and Comprehensive Evaluation of Object Hallucination in Large Vision-Language Models",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=yQL5tutdaH",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Toward+a+Stable%2C+Fair%2C+and+Comprehensive+Evaluation+of+Object+Hallucination+in+Large+Vision-Language+Models",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "SF2GlFhVsS",
            "title": "Alleviating Hallucinations in Large Vision-Language Models through Hallucination-Induced Optimization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 5.75,
            "avg_rating_z": -0.0977554447939167,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=SF2GlFhVsS",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Alleviating+Hallucinations+in+Large+Vision-Language+Models+through+Hallucination-Induced+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 50,
        "label": "quantization quantized lowbit 4bit",
        "papers": [
          {
            "rank": 1,
            "paper_id": "mp8u2Pcmqz",
            "title": "DuQuant: Distributing Outliers via Dual Transformation Makes Stronger Quantized LLMs",
            "year": 2024,
            "decision_tier": "Accept (oral)",
            "avg_rating": 7.6,
            "avg_rating_z": 1.4618440385363454,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=mp8u2Pcmqz",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=DuQuant%3A+Distributing+Outliers+via+Dual+Transformation+Makes+Stronger+Quantized+LLMs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "EfpZNpkrm2",
            "title": "QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1667846768252146,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=EfpZNpkrm2",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=QuanTA%3A+Efficient+High-Rank+Fine-Tuning+of+LLMs+with+Quantum-Informed+Tensor+Adaptation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "dfqsW38v1X",
            "title": "QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=dfqsW38v1X",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=QuaRot%3A+Outlier-Free+4-Bit+Inference+in+Rotated+LLMs",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "UARTFgkTqW",
            "title": "MagR: Weight Magnitude Reduction for Enhancing Post-Training Quantization",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=UARTFgkTqW",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=MagR%3A+Weight+Magnitude+Reduction+for+Enhancing+Post-Training+Quantization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "xrk9g5vcXR",
            "title": "QuIP: 2-Bit Quantization of Large Language Models With Guarantees",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=xrk9g5vcXR",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=QuIP%3A+2-Bit+Quantization+of+Large+Language+Models+With+Guarantees",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 51,
        "label": "optimization bayesian bo the",
        "papers": [
          {
            "rank": 1,
            "paper_id": "9KtX12YmA7",
            "title": "The Behavior and Convergence of Local Bayesian Optimization",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.5,
            "avg_rating_z": 1.3442269468849417,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=9KtX12YmA7",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=The+Behavior+and+Convergence+of+Local+Bayesian+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "1vyAG6j9PE",
            "title": "Unexpected Improvements to Expected Improvement for Bayesian Optimization",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1348253832598056,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=1vyAG6j9PE",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Unexpected+Improvements+to+Expected+Improvement+for+Bayesian+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "TVD3wNVH9A",
            "title": "Bounce: Reliable High-Dimensional Bayesian Optimization for Combinatorial and Mixed Spaces",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.8,
            "avg_rating_z": 0.757902568734561,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=TVD3wNVH9A",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Bounce%3A+Reliable+High-Dimensional+Bayesian+Optimization+for+Combinatorial+and+Mixed+Spaces",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "T5UfIfmDbq",
            "title": "Monte Carlo Tree Search based Space Transfer for Black Box Optimization",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.75,
            "avg_rating_z": 0.7452713029521708,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=T5UfIfmDbq",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Monte+Carlo+Tree+Search+based+Space+Transfer+for+Black+Box+Optimization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "da0ZJatRCN",
            "title": "Active Learning for Derivative-Based Global Sensitivity Analysis with Gaussian Processes",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=da0ZJatRCN",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Active+Learning+for+Derivative-Based+Global+Sensitivity+Analysis+with+Gaussian+Processes",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 52,
        "label": "ssl selfsupervised unlabeled semisupervised",
        "papers": [
          {
            "rank": 1,
            "paper_id": "dlCTmEyq6y",
            "title": "Semi-Supervised Sparse Gaussian Classification: Provable Benefits of Unlabeled Data",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 7.25,
            "avg_rating_z": 1.1667846768252146,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=dlCTmEyq6y",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Semi-Supervised+Sparse+Gaussian+Classification%3A+Provable+Benefits+of+Unlabeled+Data",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "Z8TjsPFBSx",
            "title": "Characterizing the Impacts of Semi-supervised Learning for Weak Supervision",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.6,
            "avg_rating_z": 0.5903813178344521,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Z8TjsPFBSx",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Characterizing+the+Impacts+of+Semi-supervised+Learning+for+Weak+Supervision",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "utreNaM1VY",
            "title": "Can semi-supervised learning use all the data effectively? A lower bound perspective",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=utreNaM1VY",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Can+semi-supervised+learning+use+all+the+data+effectively%3F+A+lower+bound+perspective",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "geLARFEK8O",
            "title": "Combating Representation Learning Disparity with Geometric Harmonization",
            "year": 2023,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=geLARFEK8O",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Combating+Representation+Learning+Disparity+with+Geometric+Harmonization",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "lkBygTc0SI",
            "title": "Do SSL Models Have Déjà Vu? A Case of Unintended Memorization in Self-supervised Learning",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5066206923843978,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=lkBygTc0SI",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Do+SSL+Models+Have+D%C3%A9j%C3%A0+Vu%3F+A+Case+of+Unintended+Memorization+in+Self-supervised+Learning",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 53,
        "label": "dexterous manipulation / robotics",
        "papers": [
          {
            "rank": 1,
            "paper_id": "Glt37xoU7e",
            "title": "Omnigrasp: Grasping Diverse Objects with Simulated Humanoids",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Glt37xoU7e",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Omnigrasp%3A+Grasping+Diverse+Objects+with+Simulated+Humanoids",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "ecRaDicXxw",
            "title": "DiffVL: Scaling Up Soft Body Manipulation using Vision-Language Driven Differentiable Physics",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.0878175651341258,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=ecRaDicXxw",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=DiffVL%3A+Scaling+Up+Soft+Body+Manipulation+using+Vision-Language+Driven+Differentiable+Physics",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "fwvfxDbUFw",
            "title": "Learning Score-based Grasping Primitive for Human-assisting Dexterous Grasping",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.0878175651341258,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=fwvfxDbUFw",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Learning+Score-based+Grasping+Primitive+for+Human-assisting+Dexterous+Grasping",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "QeWibaTmnn",
            "title": "Grasp as You Say: Language-guided Dexterous Grasp Generation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 5.75,
            "avg_rating_z": -0.0977554447939168,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=QeWibaTmnn",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Grasp+as+You+Say%3A+Language-guided+Dexterous+Grasp+Generation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "6FYh6gxzPf",
            "title": "Active Perception for Grasp Detection via Neural Graspness Field",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 5.5,
            "avg_rating_z": -0.3085121317304387,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=6FYh6gxzPf",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Active+Perception+for+Grasp+Detection+via+Neural+Graspness+Field",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 54,
        "label": "decoding speculative draft inference",
        "papers": [
          {
            "rank": 1,
            "paper_id": "8iPobEKUUA",
            "title": "Efficient Minimum Bayes Risk Decoding using Low-Rank Matrix Completion Algorithms",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=8iPobEKUUA",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Efficient+Minimum+Bayes+Risk+Decoding+using+Low-Rank+Matrix+Completion+Algorithms",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "rk2L9YGDi2",
            "title": "Sequoia: Scalable and Robust Speculative Decoding",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.534514616015649,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=rk2L9YGDi2",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Sequoia%3A+Scalable+and+Robust+Speculative+Decoding",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "5G7ve8E1Lu",
            "title": "Grammar-Aligned Decoding",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=5G7ve8E1Lu",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Grammar-Aligned+Decoding",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "Ni9kebsSTt",
            "title": "Nearest Neighbor Speculative Decoding for LLM Generation and Attribution",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=Ni9kebsSTt",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Nearest+Neighbor+Speculative+Decoding+for+LLM+Generation+and+Attribution",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "dLnduWGTB4",
            "title": "QUEST: Quality-Aware Metropolis-Hastings Sampling for Machine Translation",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=dLnduWGTB4",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=QUEST%3A+Quality-Aware+Metropolis-Hastings+Sampling+for+Machine+Translation",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      },
      {
        "topic_id": 55,
        "label": "face / deepfake detection",
        "papers": [
          {
            "rank": 1,
            "paper_id": "FNzpVTpNbN",
            "title": "DiffusionFake: Enhancing Generalization in Deepfake Detection via Guided Stable Diffusion",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.5,
            "avg_rating_z": 0.5345146160156489,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=FNzpVTpNbN",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=DiffusionFake%3A+Enhancing+Generalization+in+Deepfake+Detection+via+Guided+Stable+Diffusion",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 2,
            "paper_id": "4bJufOS6No",
            "title": "On Learning Multi-Modal Forgery Representation for Diffusion Generated Video Detection",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.2,
            "avg_rating_z": 0.2816065916918226,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=4bJufOS6No",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=On+Learning+Multi-Modal+Forgery+Representation+for+Diffusion+Generated+Video+Detection",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 3,
            "paper_id": "X2UMdvcmMo",
            "title": "FuseAnyPart: Diffusion-Driven Facial Parts Swapping via Multiple Reference Images",
            "year": 2024,
            "decision_tier": "Accept (spotlight)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=X2UMdvcmMo",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=FuseAnyPart%3A+Diffusion-Driven+Facial+Parts+Swapping+via+Multiple+Reference+Images",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 4,
            "paper_id": "KKrj1vCQaG",
            "title": "RectifID: Personalizing Rectified Flow with Anchored Classifier Guidance",
            "year": 2024,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.1130012421426051,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=KKrj1vCQaG",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=RectifID%3A+Personalizing+Rectified+Flow+with+Anchored+Classifier+Guidance",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          },
          {
            "rank": 5,
            "paper_id": "OGQWZ3p0Zn",
            "title": "Inserting Anybody in Diffusion Models via Celeb Basis",
            "year": 2023,
            "decision_tier": "Accept (poster)",
            "avg_rating": 6.0,
            "avg_rating_z": 0.0878175651341258,
            "topic_prob": 1.0,
            "openreview_url": "https://openreview.net/forum?id=OGQWZ3p0Zn",
            "semantic_scholar_search_url": "https://www.semanticscholar.org/search?q=Inserting+Anybody+in+Diffusion+Models+via+Celeb+Basis",
            "selection_reason": [
              "representative_topic_member",
              "high_topic_probability"
            ]
          }
        ]
      }
    ]
  },
  "evidence": {
    "endpoint": {
      "points": [
        {
          "topic_id": 8,
          "label": "LLM reasoning",
          "x": 4.1879,
          "y": 0.0491,
          "size": 486,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 1,
          "label": "3D vision / scene generation",
          "x": 2.3033,
          "y": -0.1019,
          "size": 882,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 14,
          "label": "preference learning / alignment",
          "x": 1.5513,
          "y": 0.029,
          "size": 200,
          "trajectory_type": "early growth / plateau"
        },
        {
          "topic_id": 23,
          "label": "LLM safety / jailbreaks",
          "x": 1.5418,
          "y": -0.0229,
          "size": 149,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 22,
          "label": "efficient attention / KV cache",
          "x": 1.2312,
          "y": 0.0962,
          "size": 252,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 21,
          "label": "video temporal understanding",
          "x": 1.0906,
          "y": -0.0805,
          "size": 173,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 37,
          "label": "LoRA / low-rank finetuning",
          "x": 1.0324,
          "y": 0.0042,
          "size": 118,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 46,
          "label": "language LLMs of the",
          "x": 0.7975,
          "y": 0.1315,
          "size": 252,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 36,
          "label": "agents LLMs agent language",
          "x": 0.7542,
          "y": 0.0539,
          "size": 196,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 20,
          "label": "vision tokens and the",
          "x": 0.6488,
          "y": -0.0396,
          "size": 278,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 3,
          "label": "multimodal visual and to",
          "x": 0.6063,
          "y": -0.0515,
          "size": 922,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 38,
          "label": "watermarking watermark watermarks image",
          "x": 0.55,
          "y": -0.0046,
          "size": 56,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 7,
          "label": "protein molecular and drug",
          "x": 0.5475,
          "y": 0.0478,
          "size": 311,
          "trajectory_type": "early growth / plateau"
        },
        {
          "topic_id": 11,
          "label": "series time forecasting data",
          "x": 0.5434,
          "y": 0.0484,
          "size": 225,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 26,
          "label": "video motion generation temporal",
          "x": 0.5366,
          "y": -0.0457,
          "size": 153,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 49,
          "label": "hallucination in LVLMs",
          "x": 0.5054,
          "y": -0.0944,
          "size": 48,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 33,
          "label": "knowledge retrieval rag query",
          "x": 0.4068,
          "y": 0.002,
          "size": 113,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 53,
          "label": "dexterous manipulation / robotics",
          "x": 0.4014,
          "y": -0.0047,
          "size": 54,
          "trajectory_type": "rebound"
        },
        {
          "topic_id": 35,
          "label": "medical image segmentation",
          "x": 0.3987,
          "y": -0.0932,
          "size": 101,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 54,
          "label": "decoding speculative draft inference",
          "x": 0.2879,
          "y": 0.0726,
          "size": 60,
          "trajectory_type": "early growth / plateau"
        },
        {
          "topic_id": 13,
          "label": "transformers transformer attention of",
          "x": 0.2839,
          "y": 0.1402,
          "size": 200,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 15,
          "label": "pdes pde equations differential",
          "x": 0.2785,
          "y": 0.1499,
          "size": 185,
          "trajectory_type": "late growth"
        },
        {
          "topic_id": 32,
          "label": "continual forgetting knowledge unlearning",
          "x": 0.1839,
          "y": -0.0142,
          "size": 132,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 40,
          "label": "anomaly detection anomalies normal",
          "x": 0.1703,
          "y": -0.0468,
          "size": 59,
          "trajectory_type": "rebound"
        },
        {
          "topic_id": 2,
          "label": "diffusion image the of",
          "x": 0.1644,
          "y": 0.0426,
          "size": 837,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 45,
          "label": "recommender systems",
          "x": 0.1582,
          "y": -0.1089,
          "size": 69,
          "trajectory_type": "consistent growth"
        },
        {
          "topic_id": 28,
          "label": "problems optimization combinatorial search",
          "x": 0.1299,
          "y": 0.0526,
          "size": 136,
          "trajectory_type": "rebound"
        },
        {
          "topic_id": 44,
          "label": "conformal prediction coverage sets",
          "x": 0.1271,
          "y": 0.0713,
          "size": 77,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 55,
          "label": "face / deepfake detection",
          "x": 0.123,
          "y": -0.1388,
          "size": 46,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 17,
          "label": "audio speech audiovisual generation",
          "x": 0.0028,
          "y": 0.1523,
          "size": 132,
          "trajectory_type": "stable"
        },
        {
          "topic_id": 50,
          "label": "quantization quantized lowbit 4bit",
          "x": 0.0028,
          "y": 0.0433,
          "size": 88,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 47,
          "label": "quantum classical of the",
          "x": -0.0513,
          "y": 0.0651,
          "size": 42,
          "trajectory_type": "early decline / plateau"
        },
        {
          "topic_id": 48,
          "label": "pruning sparsity compression sparse",
          "x": -0.0675,
          "y": 0.0326,
          "size": 82,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 19,
          "label": "federated fl clients client",
          "x": -0.1485,
          "y": -0.107,
          "size": 132,
          "trajectory_type": "spike then reversal"
        },
        {
          "topic_id": 51,
          "label": "optimization bayesian bo the",
          "x": -0.1918,
          "y": 0.1454,
          "size": 77,
          "trajectory_type": "late decline"
        },
        {
          "topic_id": 42,
          "label": "backdoor attacks attack defense",
          "x": -0.235,
          "y": -0.1395,
          "size": 75,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 52,
          "label": "ssl selfsupervised unlabeled semisupervised",
          "x": -0.3013,
          "y": 0.1219,
          "size": 42,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 30,
          "label": "fairness fair groups in",
          "x": -0.3269,
          "y": 0.0961,
          "size": 89,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 6,
          "label": "brain spiking of and",
          "x": -0.3319,
          "y": 0.1781,
          "size": 402,
          "trajectory_type": "rebound"
        },
        {
          "topic_id": 39,
          "label": "clustering / approximation algorithms",
          "x": -0.3647,
          "y": 0.2119,
          "size": 87,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 43,
          "label": "ood detection outofdistribution id",
          "x": -0.4539,
          "y": -0.0477,
          "size": 76,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 31,
          "label": "label labels the noisy",
          "x": -0.4768,
          "y": 0.0291,
          "size": 147,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 34,
          "label": "communication distributed federated convergence",
          "x": -0.5715,
          "y": 0.0511,
          "size": 96,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 41,
          "label": "equivariant symmetries group symmetry",
          "x": -0.8133,
          "y": 0.1512,
          "size": 97,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 9,
          "label": "causal treatment variables of",
          "x": -0.855,
          "y": 0.0734,
          "size": 280,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 25,
          "label": "game theory / equilibria",
          "x": -0.8849,
          "y": 0.2236,
          "size": 124,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 24,
          "label": "statistical learning theory",
          "x": -1.051,
          "y": 0.2466,
          "size": 222,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 18,
          "label": "convex optimization",
          "x": -1.0915,
          "y": 0.0963,
          "size": 236,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 16,
          "label": "deep learning theory",
          "x": -1.1225,
          "y": 0.1514,
          "size": 298,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 10,
          "label": "differential privacy",
          "x": -1.3671,
          "y": 0.166,
          "size": 219,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 27,
          "label": "Bayesian inference",
          "x": -1.5495,
          "y": 0.1936,
          "size": 249,
          "trajectory_type": "early decline / plateau"
        },
        {
          "topic_id": 12,
          "label": "adversarial robustness",
          "x": -1.6265,
          "y": -0.0491,
          "size": 258,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 29,
          "label": "matrix algorithms",
          "x": -1.6577,
          "y": 0.2135,
          "size": 201,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 5,
          "label": "bandits / regret minimization",
          "x": -1.6817,
          "y": 0.1333,
          "size": 482,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 4,
          "label": "graph neural networks",
          "x": -1.8654,
          "y": 0.056,
          "size": 507,
          "trajectory_type": "consistent decline"
        },
        {
          "topic_id": 0,
          "label": "RL / policy learning",
          "x": -2.4607,
          "y": 0.0546,
          "size": 1029,
          "trajectory_type": "consistent decline"
        }
      ],
      "fit": {
        "x_grid": [
          -2.4607,
          -2.376541,
          -2.292381,
          -2.208222,
          -2.124062,
          -2.039903,
          -1.955743,
          -1.871584,
          -1.787424,
          -1.703265,
          -1.619105,
          -1.534946,
          -1.450786,
          -1.366627,
          -1.282467,
          -1.198308,
          -1.114148,
          -1.029989,
          -0.945829,
          -0.86167,
          -0.77751,
          -0.693351,
          -0.609191,
          -0.525032,
          -0.440872,
          -0.356713,
          -0.272553,
          -0.188394,
          -0.104234,
          -0.020075,
          0.064085,
          0.148244,
          0.232404,
          0.316563,
          0.400723,
          0.484882,
          0.569042,
          0.653201,
          0.737361,
          0.82152,
          0.90568,
          0.989839,
          1.073999,
          1.158158,
          1.242318,
          1.326477,
          1.410637,
          1.494796,
          1.578956,
          1.663115,
          1.747275,
          1.831434,
          1.915594,
          1.999753,
          2.083913,
          2.168072,
          2.252232,
          2.336391,
          2.420551,
          2.50471,
          2.58887,
          2.673029,
          2.757189,
          2.841348,
          2.925508,
          3.009667,
          3.093827,
          3.177986,
          3.262146,
          3.346305,
          3.430465,
          3.514624,
          3.598784,
          3.682943,
          3.767103,
          3.851262,
          3.935422,
          4.019581,
          4.103741,
          4.1879
        ],
        "y_hat": [
          0.134092,
          0.131146,
          0.128201,
          0.125256,
          0.122311,
          0.119365,
          0.11642,
          0.113475,
          0.11053,
          0.107584,
          0.104639,
          0.101694,
          0.098749,
          0.095803,
          0.092858,
          0.089913,
          0.086968,
          0.084022,
          0.081077,
          0.078132,
          0.075187,
          0.072241,
          0.069296,
          0.066351,
          0.063406,
          0.06046,
          0.057515,
          0.05457,
          0.051625,
          0.048679,
          0.045734,
          0.042789,
          0.039844,
          0.036898,
          0.033953,
          0.031008,
          0.028062,
          0.025117,
          0.022172,
          0.019227,
          0.016281,
          0.013336,
          0.010391,
          0.007446,
          0.0045,
          0.001555,
          -0.00139,
          -0.004335,
          -0.007281,
          -0.010226,
          -0.013171,
          -0.016116,
          -0.019062,
          -0.022007,
          -0.024952,
          -0.027897,
          -0.030843,
          -0.033788,
          -0.036733,
          -0.039678,
          -0.042624,
          -0.045569,
          -0.048514,
          -0.051459,
          -0.054405,
          -0.05735,
          -0.060295,
          -0.06324,
          -0.066186,
          -0.069131,
          -0.072076,
          -0.075021,
          -0.077967,
          -0.080912,
          -0.083857,
          -0.086802,
          -0.089748,
          -0.092693,
          -0.095638,
          -0.098583
        ],
        "ci_low": [
          0.07387,
          0.072649,
          0.071418,
          0.070175,
          0.06892,
          0.067651,
          0.066368,
          0.065067,
          0.063749,
          0.06241,
          0.061049,
          0.059663,
          0.058248,
          0.056803,
          0.055322,
          0.053803,
          0.052239,
          0.050626,
          0.048956,
          0.047225,
          0.045423,
          0.043542,
          0.041574,
          0.039509,
          0.037336,
          0.035046,
          0.03263,
          0.03008,
          0.027389,
          0.024553,
          0.021569,
          0.018438,
          0.015165,
          0.011753,
          0.008211,
          0.004548,
          0.000773,
          -0.003104,
          -0.007073,
          -0.011125,
          -0.015252,
          -0.019444,
          -0.023696,
          -0.028,
          -0.03235,
          -0.036742,
          -0.041171,
          -0.045633,
          -0.050124,
          -0.054641,
          -0.059183,
          -0.063745,
          -0.068327,
          -0.072926,
          -0.077541,
          -0.08217,
          -0.086812,
          -0.091466,
          -0.096131,
          -0.100806,
          -0.105489,
          -0.110181,
          -0.114881,
          -0.119588,
          -0.124301,
          -0.129021,
          -0.133746,
          -0.138476,
          -0.143212,
          -0.147951,
          -0.152695,
          -0.157443,
          -0.162195,
          -0.16695,
          -0.171708,
          -0.17647,
          -0.181234,
          -0.186001,
          -0.190771,
          -0.195543
        ],
        "ci_high": [
          0.194313,
          0.189644,
          0.184984,
          0.180337,
          0.175701,
          0.171079,
          0.166472,
          0.161882,
          0.15731,
          0.152758,
          0.148229,
          0.143725,
          0.139249,
          0.134804,
          0.130394,
          0.126023,
          0.121696,
          0.117419,
          0.113198,
          0.109039,
          0.10495,
          0.10094,
          0.097018,
          0.093193,
          0.089475,
          0.085874,
          0.0824,
          0.079059,
          0.07586,
          0.072806,
          0.069899,
          0.067139,
          0.064522,
          0.062043,
          0.059695,
          0.057467,
          0.055352,
          0.053338,
          0.051417,
          0.049579,
          0.047815,
          0.046117,
          0.044478,
          0.042891,
          0.041351,
          0.039852,
          0.038391,
          0.036962,
          0.035563,
          0.03419,
          0.032841,
          0.031513,
          0.030204,
          0.028913,
          0.027637,
          0.026376,
          0.025127,
          0.023891,
          0.022665,
          0.021449,
          0.020242,
          0.019044,
          0.017853,
          0.016669,
          0.015492,
          0.014321,
          0.013156,
          0.011996,
          0.01084,
          0.00969,
          0.008543,
          0.007401,
          0.006262,
          0.005126,
          0.003994,
          0.002865,
          0.001739,
          0.000615,
          -0.000506,
          -0.001624
        ],
        "slope": -0.034996,
        "intercept": 0.047977
      },
      "stats": {
        "pearson_r": -0.3842606932307198,
        "pearson_p": 0.0034573384739652,
        "spearman_rho": -0.4713602187286398,
        "spearman_p": 0.0002455730918931,
        "ols_rating_coef_delta_on_rating": -5.902756122900096,
        "ols_p": 0.0002532547494872,
        "bootstrap_ci": [
          -8.725127395367245,
          -2.780386394574995
        ],
        "n_topics": 56
      },
      "note": "Endpoint view plots accepted-paper share change (2025−2023) against year-normalized reviewer rating."
    },
    "transition": {
      "points": [
        {
          "topic_id": 8,
          "label": "LLM reasoning",
          "transition": "2023→2024",
          "x": 1.054,
          "y": 0.0491,
          "size": 486
        },
        {
          "topic_id": 8,
          "label": "LLM reasoning",
          "transition": "2024→2025",
          "x": 3.1339,
          "y": 0.0491,
          "size": 486
        },
        {
          "topic_id": 1,
          "label": "3D vision / scene generation",
          "transition": "2023→2024",
          "x": 2.4248,
          "y": -0.1019,
          "size": 882
        },
        {
          "topic_id": 1,
          "label": "3D vision / scene generation",
          "transition": "2024→2025",
          "x": -0.1215,
          "y": -0.1019,
          "size": 882
        },
        {
          "topic_id": 14,
          "label": "preference learning / alignment",
          "transition": "2023→2024",
          "x": 1.5724,
          "y": 0.029,
          "size": 200
        },
        {
          "topic_id": 14,
          "label": "preference learning / alignment",
          "transition": "2024→2025",
          "x": -0.0211,
          "y": 0.029,
          "size": 200
        },
        {
          "topic_id": 23,
          "label": "LLM safety / jailbreaks",
          "transition": "2023→2024",
          "x": 0.9968,
          "y": -0.0229,
          "size": 149
        },
        {
          "topic_id": 23,
          "label": "LLM safety / jailbreaks",
          "transition": "2024→2025",
          "x": 0.545,
          "y": -0.0229,
          "size": 149
        },
        {
          "topic_id": 22,
          "label": "efficient attention / KV cache",
          "transition": "2023→2024",
          "x": 0.2869,
          "y": 0.0962,
          "size": 252
        },
        {
          "topic_id": 22,
          "label": "efficient attention / KV cache",
          "transition": "2024→2025",
          "x": 0.9443,
          "y": 0.0962,
          "size": 252
        },
        {
          "topic_id": 21,
          "label": "video temporal understanding",
          "transition": "2023→2024",
          "x": 0.2514,
          "y": -0.0805,
          "size": 173
        },
        {
          "topic_id": 21,
          "label": "video temporal understanding",
          "transition": "2024→2025",
          "x": 0.8392,
          "y": -0.0805,
          "size": 173
        },
        {
          "topic_id": 37,
          "label": "LoRA / low-rank finetuning",
          "transition": "2023→2024",
          "x": 0.6062,
          "y": 0.0042,
          "size": 118
        },
        {
          "topic_id": 37,
          "label": "LoRA / low-rank finetuning",
          "transition": "2024→2025",
          "x": 0.4262,
          "y": 0.0042,
          "size": 118
        },
        {
          "topic_id": 46,
          "label": "language LLMs of the",
          "transition": "2023→2024",
          "x": 0.5654,
          "y": 0.1315,
          "size": 252
        },
        {
          "topic_id": 46,
          "label": "language LLMs of the",
          "transition": "2024→2025",
          "x": 0.2321,
          "y": 0.1315,
          "size": 252
        },
        {
          "topic_id": 36,
          "label": "agents LLMs agent language",
          "transition": "2023→2024",
          "x": 0.3931,
          "y": 0.0539,
          "size": 196
        },
        {
          "topic_id": 36,
          "label": "agents LLMs agent language",
          "transition": "2024→2025",
          "x": 0.3611,
          "y": 0.0539,
          "size": 196
        },
        {
          "topic_id": 20,
          "label": "vision tokens and the",
          "transition": "2023→2024",
          "x": 0.825,
          "y": -0.0396,
          "size": 278
        },
        {
          "topic_id": 20,
          "label": "vision tokens and the",
          "transition": "2024→2025",
          "x": -0.1762,
          "y": -0.0396,
          "size": 278
        },
        {
          "topic_id": 3,
          "label": "multimodal visual and to",
          "transition": "2023→2024",
          "x": 0.4245,
          "y": -0.0515,
          "size": 922
        },
        {
          "topic_id": 3,
          "label": "multimodal visual and to",
          "transition": "2024→2025",
          "x": 0.1818,
          "y": -0.0515,
          "size": 922
        },
        {
          "topic_id": 38,
          "label": "watermarking watermark watermarks image",
          "transition": "2023→2024",
          "x": 0.3777,
          "y": -0.0046,
          "size": 56
        },
        {
          "topic_id": 38,
          "label": "watermarking watermark watermarks image",
          "transition": "2024→2025",
          "x": 0.1723,
          "y": -0.0046,
          "size": 56
        },
        {
          "topic_id": 7,
          "label": "protein molecular and drug",
          "transition": "2023→2024",
          "x": 0.5202,
          "y": 0.0478,
          "size": 311
        },
        {
          "topic_id": 7,
          "label": "protein molecular and drug",
          "transition": "2024→2025",
          "x": 0.0274,
          "y": 0.0478,
          "size": 311
        },
        {
          "topic_id": 11,
          "label": "series time forecasting data",
          "transition": "2023→2024",
          "x": 0.6153,
          "y": 0.0484,
          "size": 225
        },
        {
          "topic_id": 11,
          "label": "series time forecasting data",
          "transition": "2024→2025",
          "x": -0.0719,
          "y": 0.0484,
          "size": 225
        },
        {
          "topic_id": 26,
          "label": "video motion generation temporal",
          "transition": "2023→2024",
          "x": 0.2884,
          "y": -0.0457,
          "size": 153
        },
        {
          "topic_id": 26,
          "label": "video motion generation temporal",
          "transition": "2024→2025",
          "x": 0.2482,
          "y": -0.0457,
          "size": 153
        },
        {
          "topic_id": 49,
          "label": "hallucination in LVLMs",
          "transition": "2023→2024",
          "x": 0.3344,
          "y": -0.0944,
          "size": 48
        },
        {
          "topic_id": 49,
          "label": "hallucination in LVLMs",
          "transition": "2024→2025",
          "x": 0.171,
          "y": -0.0944,
          "size": 48
        },
        {
          "topic_id": 33,
          "label": "knowledge retrieval rag query",
          "transition": "2023→2024",
          "x": 0.2396,
          "y": 0.002,
          "size": 113
        },
        {
          "topic_id": 33,
          "label": "knowledge retrieval rag query",
          "transition": "2024→2025",
          "x": 0.1672,
          "y": 0.002,
          "size": 113
        },
        {
          "topic_id": 53,
          "label": "dexterous manipulation / robotics",
          "transition": "2023→2024",
          "x": -0.0566,
          "y": -0.0047,
          "size": 54
        },
        {
          "topic_id": 53,
          "label": "dexterous manipulation / robotics",
          "transition": "2024→2025",
          "x": 0.458,
          "y": -0.0047,
          "size": 54
        },
        {
          "topic_id": 35,
          "label": "medical image segmentation",
          "transition": "2023→2024",
          "x": 0.3391,
          "y": -0.0932,
          "size": 101
        },
        {
          "topic_id": 35,
          "label": "medical image segmentation",
          "transition": "2024→2025",
          "x": 0.0596,
          "y": -0.0932,
          "size": 101
        },
        {
          "topic_id": 54,
          "label": "decoding speculative draft inference",
          "transition": "2023→2024",
          "x": 0.2408,
          "y": 0.0726,
          "size": 60
        },
        {
          "topic_id": 54,
          "label": "decoding speculative draft inference",
          "transition": "2024→2025",
          "x": 0.0471,
          "y": 0.0726,
          "size": 60
        },
        {
          "topic_id": 13,
          "label": "transformers transformer attention of",
          "transition": "2023→2024",
          "x": 0.5288,
          "y": 0.1402,
          "size": 200
        },
        {
          "topic_id": 13,
          "label": "transformers transformer attention of",
          "transition": "2024→2025",
          "x": -0.2448,
          "y": 0.1402,
          "size": 200
        },
        {
          "topic_id": 15,
          "label": "pdes pde equations differential",
          "transition": "2023→2024",
          "x": -0.029,
          "y": 0.1499,
          "size": 185
        },
        {
          "topic_id": 15,
          "label": "pdes pde equations differential",
          "transition": "2024→2025",
          "x": 0.3076,
          "y": 0.1499,
          "size": 185
        },
        {
          "topic_id": 32,
          "label": "continual forgetting knowledge unlearning",
          "transition": "2023→2024",
          "x": 0.1334,
          "y": -0.0142,
          "size": 132
        },
        {
          "topic_id": 32,
          "label": "continual forgetting knowledge unlearning",
          "transition": "2024→2025",
          "x": 0.0505,
          "y": -0.0142,
          "size": 132
        },
        {
          "topic_id": 40,
          "label": "anomaly detection anomalies normal",
          "transition": "2023→2024",
          "x": -0.1129,
          "y": -0.0468,
          "size": 59
        },
        {
          "topic_id": 40,
          "label": "anomaly detection anomalies normal",
          "transition": "2024→2025",
          "x": 0.2832,
          "y": -0.0468,
          "size": 59
        },
        {
          "topic_id": 2,
          "label": "diffusion image the of",
          "transition": "2023→2024",
          "x": 0.3454,
          "y": 0.0426,
          "size": 837
        },
        {
          "topic_id": 2,
          "label": "diffusion image the of",
          "transition": "2024→2025",
          "x": -0.181,
          "y": 0.0426,
          "size": 837
        },
        {
          "topic_id": 45,
          "label": "recommender systems",
          "transition": "2023→2024",
          "x": 0.0543,
          "y": -0.1089,
          "size": 69
        },
        {
          "topic_id": 45,
          "label": "recommender systems",
          "transition": "2024→2025",
          "x": 0.1038,
          "y": -0.1089,
          "size": 69
        },
        {
          "topic_id": 28,
          "label": "problems optimization combinatorial search",
          "transition": "2023→2024",
          "x": -0.2761,
          "y": 0.0526,
          "size": 136
        },
        {
          "topic_id": 28,
          "label": "problems optimization combinatorial search",
          "transition": "2024→2025",
          "x": 0.406,
          "y": 0.0526,
          "size": 136
        },
        {
          "topic_id": 44,
          "label": "conformal prediction coverage sets",
          "transition": "2023→2024",
          "x": 0.1967,
          "y": 0.0713,
          "size": 77
        },
        {
          "topic_id": 44,
          "label": "conformal prediction coverage sets",
          "transition": "2024→2025",
          "x": -0.0696,
          "y": 0.0713,
          "size": 77
        },
        {
          "topic_id": 55,
          "label": "face / deepfake detection",
          "transition": "2023→2024",
          "x": 0.3029,
          "y": -0.1388,
          "size": 46
        },
        {
          "topic_id": 55,
          "label": "face / deepfake detection",
          "transition": "2024→2025",
          "x": -0.1799,
          "y": -0.1388,
          "size": 46
        },
        {
          "topic_id": 17,
          "label": "audio speech audiovisual generation",
          "transition": "2023→2024",
          "x": -0.0157,
          "y": 0.1523,
          "size": 132
        },
        {
          "topic_id": 17,
          "label": "audio speech audiovisual generation",
          "transition": "2024→2025",
          "x": 0.0185,
          "y": 0.1523,
          "size": 132
        },
        {
          "topic_id": 50,
          "label": "quantization quantized lowbit 4bit",
          "transition": "2023→2024",
          "x": 0.2459,
          "y": 0.0433,
          "size": 88
        },
        {
          "topic_id": 50,
          "label": "quantization quantized lowbit 4bit",
          "transition": "2024→2025",
          "x": -0.2431,
          "y": 0.0433,
          "size": 88
        },
        {
          "topic_id": 47,
          "label": "quantum classical of the",
          "transition": "2023→2024",
          "x": -0.0507,
          "y": 0.0651,
          "size": 42
        },
        {
          "topic_id": 47,
          "label": "quantum classical of the",
          "transition": "2024→2025",
          "x": -0.0006,
          "y": 0.0651,
          "size": 42
        },
        {
          "topic_id": 48,
          "label": "pruning sparsity compression sparse",
          "transition": "2023→2024",
          "x": 0.3824,
          "y": 0.0326,
          "size": 82
        },
        {
          "topic_id": 48,
          "label": "pruning sparsity compression sparse",
          "transition": "2024→2025",
          "x": -0.4499,
          "y": 0.0326,
          "size": 82
        },
        {
          "topic_id": 19,
          "label": "federated fl clients client",
          "transition": "2023→2024",
          "x": 0.1826,
          "y": -0.107,
          "size": 132
        },
        {
          "topic_id": 19,
          "label": "federated fl clients client",
          "transition": "2024→2025",
          "x": -0.3311,
          "y": -0.107,
          "size": 132
        },
        {
          "topic_id": 51,
          "label": "optimization bayesian bo the",
          "transition": "2023→2024",
          "x": 0.0351,
          "y": 0.1454,
          "size": 77
        },
        {
          "topic_id": 51,
          "label": "optimization bayesian bo the",
          "transition": "2024→2025",
          "x": -0.2268,
          "y": 0.1454,
          "size": 77
        },
        {
          "topic_id": 42,
          "label": "backdoor attacks attack defense",
          "transition": "2023→2024",
          "x": -0.151,
          "y": -0.1395,
          "size": 75
        },
        {
          "topic_id": 42,
          "label": "backdoor attacks attack defense",
          "transition": "2024→2025",
          "x": -0.084,
          "y": -0.1395,
          "size": 75
        },
        {
          "topic_id": 52,
          "label": "ssl selfsupervised unlabeled semisupervised",
          "transition": "2023→2024",
          "x": -0.2061,
          "y": 0.1219,
          "size": 42
        },
        {
          "topic_id": 52,
          "label": "ssl selfsupervised unlabeled semisupervised",
          "transition": "2024→2025",
          "x": -0.0952,
          "y": 0.1219,
          "size": 42
        },
        {
          "topic_id": 30,
          "label": "fairness fair groups in",
          "transition": "2023→2024",
          "x": -0.2631,
          "y": 0.0961,
          "size": 89
        },
        {
          "topic_id": 30,
          "label": "fairness fair groups in",
          "transition": "2024→2025",
          "x": -0.0638,
          "y": 0.0961,
          "size": 89
        },
        {
          "topic_id": 6,
          "label": "brain spiking of and",
          "transition": "2023→2024",
          "x": -0.8042,
          "y": 0.1781,
          "size": 402
        },
        {
          "topic_id": 6,
          "label": "brain spiking of and",
          "transition": "2024→2025",
          "x": 0.4723,
          "y": 0.1781,
          "size": 402
        },
        {
          "topic_id": 39,
          "label": "clustering / approximation algorithms",
          "transition": "2023→2024",
          "x": -0.2631,
          "y": 0.2119,
          "size": 87
        },
        {
          "topic_id": 39,
          "label": "clustering / approximation algorithms",
          "transition": "2024→2025",
          "x": -0.1016,
          "y": 0.2119,
          "size": 87
        },
        {
          "topic_id": 43,
          "label": "ood detection outofdistribution id",
          "transition": "2023→2024",
          "x": -0.2257,
          "y": -0.0477,
          "size": 76
        },
        {
          "topic_id": 43,
          "label": "ood detection outofdistribution id",
          "transition": "2024→2025",
          "x": -0.2282,
          "y": -0.0477,
          "size": 76
        },
        {
          "topic_id": 31,
          "label": "label labels the noisy",
          "transition": "2023→2024",
          "x": -0.2709,
          "y": 0.0291,
          "size": 147
        },
        {
          "topic_id": 31,
          "label": "label labels the noisy",
          "transition": "2024→2025",
          "x": -0.2059,
          "y": 0.0291,
          "size": 147
        },
        {
          "topic_id": 34,
          "label": "communication distributed federated convergence",
          "transition": "2023→2024",
          "x": -0.0589,
          "y": 0.0511,
          "size": 96
        },
        {
          "topic_id": 34,
          "label": "communication distributed federated convergence",
          "transition": "2024→2025",
          "x": -0.5125,
          "y": 0.0511,
          "size": 96
        },
        {
          "topic_id": 41,
          "label": "equivariant symmetries group symmetry",
          "transition": "2023→2024",
          "x": -0.5864,
          "y": 0.1512,
          "size": 97
        },
        {
          "topic_id": 41,
          "label": "equivariant symmetries group symmetry",
          "transition": "2024→2025",
          "x": -0.2268,
          "y": 0.1512,
          "size": 97
        },
        {
          "topic_id": 9,
          "label": "causal treatment variables of",
          "transition": "2023→2024",
          "x": -0.5352,
          "y": 0.0734,
          "size": 280
        },
        {
          "topic_id": 9,
          "label": "causal treatment variables of",
          "transition": "2024→2025",
          "x": -0.3198,
          "y": 0.0734,
          "size": 280
        },
        {
          "topic_id": 25,
          "label": "game theory / equilibria",
          "transition": "2023→2024",
          "x": -0.6926,
          "y": 0.2236,
          "size": 124
        },
        {
          "topic_id": 25,
          "label": "game theory / equilibria",
          "transition": "2024→2025",
          "x": -0.1922,
          "y": 0.2236,
          "size": 124
        },
        {
          "topic_id": 24,
          "label": "statistical learning theory",
          "transition": "2023→2024",
          "x": -0.2673,
          "y": 0.2466,
          "size": 222
        },
        {
          "topic_id": 24,
          "label": "statistical learning theory",
          "transition": "2024→2025",
          "x": -0.7836,
          "y": 0.2466,
          "size": 222
        },
        {
          "topic_id": 18,
          "label": "convex optimization",
          "transition": "2023→2024",
          "x": -0.6399,
          "y": 0.0963,
          "size": 236
        },
        {
          "topic_id": 18,
          "label": "convex optimization",
          "transition": "2024→2025",
          "x": -0.4516,
          "y": 0.0963,
          "size": 236
        },
        {
          "topic_id": 16,
          "label": "deep learning theory",
          "transition": "2023→2024",
          "x": -0.5112,
          "y": 0.1514,
          "size": 298
        },
        {
          "topic_id": 16,
          "label": "deep learning theory",
          "transition": "2024→2025",
          "x": -0.6113,
          "y": 0.1514,
          "size": 298
        },
        {
          "topic_id": 10,
          "label": "differential privacy",
          "transition": "2023→2024",
          "x": -1.0863,
          "y": 0.166,
          "size": 219
        },
        {
          "topic_id": 10,
          "label": "differential privacy",
          "transition": "2024→2025",
          "x": -0.2808,
          "y": 0.166,
          "size": 219
        },
        {
          "topic_id": 27,
          "label": "Bayesian inference",
          "transition": "2023→2024",
          "x": -1.5525,
          "y": 0.1936,
          "size": 249
        },
        {
          "topic_id": 27,
          "label": "Bayesian inference",
          "transition": "2024→2025",
          "x": 0.003,
          "y": 0.1936,
          "size": 249
        },
        {
          "topic_id": 12,
          "label": "adversarial robustness",
          "transition": "2023→2024",
          "x": -0.9388,
          "y": -0.0491,
          "size": 258
        },
        {
          "topic_id": 12,
          "label": "adversarial robustness",
          "transition": "2024→2025",
          "x": -0.6877,
          "y": -0.0491,
          "size": 258
        },
        {
          "topic_id": 29,
          "label": "matrix algorithms",
          "transition": "2023→2024",
          "x": -1.0553,
          "y": 0.2135,
          "size": 201
        },
        {
          "topic_id": 29,
          "label": "matrix algorithms",
          "transition": "2024→2025",
          "x": -0.6024,
          "y": 0.2135,
          "size": 201
        },
        {
          "topic_id": 5,
          "label": "bandits / regret minimization",
          "transition": "2023→2024",
          "x": -1.0126,
          "y": 0.1333,
          "size": 482
        },
        {
          "topic_id": 5,
          "label": "bandits / regret minimization",
          "transition": "2024→2025",
          "x": -0.669,
          "y": 0.1333,
          "size": 482
        },
        {
          "topic_id": 4,
          "label": "graph neural networks",
          "transition": "2023→2024",
          "x": -1.3112,
          "y": 0.056,
          "size": 507
        },
        {
          "topic_id": 4,
          "label": "graph neural networks",
          "transition": "2024→2025",
          "x": -0.5542,
          "y": 0.056,
          "size": 507
        },
        {
          "topic_id": 0,
          "label": "RL / policy learning",
          "transition": "2023→2024",
          "x": -1.79,
          "y": 0.0546,
          "size": 1029
        },
        {
          "topic_id": 0,
          "label": "RL / policy learning",
          "transition": "2024→2025",
          "x": -0.6707,
          "y": 0.0546,
          "size": 1029
        }
      ],
      "fit": {
        "x_grid": [
          -1.79,
          -1.727672,
          -1.665344,
          -1.603016,
          -1.540689,
          -1.478361,
          -1.416033,
          -1.353705,
          -1.291377,
          -1.229049,
          -1.166722,
          -1.104394,
          -1.042066,
          -0.979738,
          -0.91741,
          -0.855082,
          -0.792754,
          -0.730427,
          -0.668099,
          -0.605771,
          -0.543443,
          -0.481115,
          -0.418787,
          -0.356459,
          -0.294132,
          -0.231804,
          -0.169476,
          -0.107148,
          -0.04482,
          0.017508,
          0.079835,
          0.142163,
          0.204491,
          0.266819,
          0.329147,
          0.391475,
          0.453803,
          0.51613,
          0.578458,
          0.640786,
          0.703114,
          0.765442,
          0.82777,
          0.890097,
          0.952425,
          1.014753,
          1.077081,
          1.139409,
          1.201737,
          1.264065,
          1.326392,
          1.38872,
          1.451048,
          1.513376,
          1.575704,
          1.638032,
          1.700359,
          1.762687,
          1.825015,
          1.887343,
          1.949671,
          2.011999,
          2.074327,
          2.136654,
          2.198982,
          2.26131,
          2.323638,
          2.385966,
          2.448294,
          2.510622,
          2.572949,
          2.635277,
          2.697605,
          2.759933,
          2.822261,
          2.884589,
          2.946916,
          3.009244,
          3.071572,
          3.1339
        ],
        "y_hat": [
          0.135609,
          0.132558,
          0.129507,
          0.126455,
          0.123404,
          0.120353,
          0.117301,
          0.11425,
          0.111198,
          0.108147,
          0.105096,
          0.102044,
          0.098993,
          0.095942,
          0.09289,
          0.089839,
          0.086788,
          0.083736,
          0.080685,
          0.077634,
          0.074582,
          0.071531,
          0.068479,
          0.065428,
          0.062377,
          0.059325,
          0.056274,
          0.053223,
          0.050171,
          0.04712,
          0.044069,
          0.041017,
          0.037966,
          0.034915,
          0.031863,
          0.028812,
          0.02576,
          0.022709,
          0.019658,
          0.016606,
          0.013555,
          0.010504,
          0.007452,
          0.004401,
          0.00135,
          -0.001702,
          -0.004753,
          -0.007804,
          -0.010856,
          -0.013907,
          -0.016959,
          -0.02001,
          -0.023061,
          -0.026113,
          -0.029164,
          -0.032215,
          -0.035267,
          -0.038318,
          -0.041369,
          -0.044421,
          -0.047472,
          -0.050523,
          -0.053575,
          -0.056626,
          -0.059678,
          -0.062729,
          -0.06578,
          -0.068832,
          -0.071883,
          -0.074934,
          -0.077986,
          -0.081037,
          -0.084088,
          -0.08714,
          -0.090191,
          -0.093242,
          -0.096294,
          -0.099345,
          -0.102397,
          -0.105448
        ],
        "ci_low": [
          0.084337,
          0.082864,
          0.081384,
          0.079896,
          0.078399,
          0.076894,
          0.075378,
          0.07385,
          0.07231,
          0.070755,
          0.069184,
          0.067594,
          0.065984,
          0.06435,
          0.062689,
          0.060997,
          0.05927,
          0.057502,
          0.055687,
          0.053818,
          0.051886,
          0.049881,
          0.047792,
          0.045607,
          0.043314,
          0.040898,
          0.038346,
          0.035648,
          0.032793,
          0.029778,
          0.0266,
          0.023263,
          0.019775,
          0.016146,
          0.012389,
          0.008517,
          0.004543,
          0.000481,
          -0.003659,
          -0.007866,
          -0.012131,
          -0.016446,
          -0.020804,
          -0.0252,
          -0.029629,
          -0.034087,
          -0.038569,
          -0.043073,
          -0.047597,
          -0.052138,
          -0.056694,
          -0.061264,
          -0.065846,
          -0.070438,
          -0.075041,
          -0.079652,
          -0.084271,
          -0.088897,
          -0.09353,
          -0.098169,
          -0.102814,
          -0.107463,
          -0.112117,
          -0.116775,
          -0.121437,
          -0.126103,
          -0.130772,
          -0.135444,
          -0.140119,
          -0.144797,
          -0.149477,
          -0.154159,
          -0.158844,
          -0.163531,
          -0.168219,
          -0.17291,
          -0.177602,
          -0.182295,
          -0.186991,
          -0.191687
        ],
        "ci_high": [
          0.186881,
          0.182252,
          0.17763,
          0.173015,
          0.168409,
          0.163812,
          0.159225,
          0.15465,
          0.150087,
          0.14554,
          0.141008,
          0.136495,
          0.132002,
          0.127534,
          0.123092,
          0.118681,
          0.114305,
          0.10997,
          0.105683,
          0.101449,
          0.097279,
          0.093181,
          0.089167,
          0.085249,
          0.08144,
          0.077753,
          0.074202,
          0.070798,
          0.067549,
          0.064462,
          0.061537,
          0.058772,
          0.056157,
          0.053683,
          0.051338,
          0.049107,
          0.046978,
          0.044937,
          0.042975,
          0.041079,
          0.039241,
          0.037453,
          0.035709,
          0.034002,
          0.032328,
          0.030683,
          0.029063,
          0.027465,
          0.025886,
          0.024324,
          0.022777,
          0.021244,
          0.019723,
          0.018213,
          0.016713,
          0.015221,
          0.013738,
          0.012261,
          0.010792,
          0.009328,
          0.007869,
          0.006416,
          0.004967,
          0.003523,
          0.002082,
          0.000645,
          -0.000788,
          -0.002219,
          -0.003647,
          -0.005072,
          -0.006494,
          -0.007915,
          -0.009333,
          -0.010749,
          -0.012163,
          -0.013575,
          -0.014986,
          -0.016395,
          -0.017802,
          -0.019209
        ],
        "slope": -0.048957,
        "intercept": 0.047977
      },
      "stats": {
        "pearson_r": -0.3213764459740119,
        "pearson_p": 0.0005500828619464,
        "spearman_rho": -0.3869427253455139,
        "spearman_p": 2.5038077058090465e-05,
        "regression_coef": -3.693216778986533,
        "regression_p": 8.31658032085574e-05,
        "weighted_regression_coef": -6.388916644949136,
        "weighted_regression_p": 7.770124541658616e-08,
        "n_observations": 112
      },
      "note": "Transition view uses two observations per topic: 2023→2024 and 2024→2025."
    }
  },
  "model": {
    "models": [
      {
        "model": "MiniLM selected, pre-reduction",
        "topics": 56,
        "outlier_rate": 0.3453225935082542,
        "largest_topic_share": 0.0665922322354254,
        "diversity": 0.9446428571428572,
        "c_npmi": 0.143868724391601,
        "c_v": 0.7402226027998143
      },
      {
        "model": "Selected BERTopic + reduction",
        "topics": 56,
        "outlier_rate": 0.0,
        "largest_topic_share": 0.0820639604434165,
        "diversity": 0.5178571428571429,
        "c_npmi": 0.1769612304382171,
        "c_v": 0.7328940347044947
      },
      {
        "model": "LDA TF-IDF, K=30",
        "topics": 30,
        "outlier_rate": 0.0,
        "largest_topic_share": 0.0623654198899433,
        "diversity": 0.7633333333333333,
        "c_npmi": 0.0421497052577923,
        "c_v": 0.525787073730383
      }
    ],
    "stability": [
      {
        "pair_type": "MiniLM-MiniLM",
        "pairs": 5778,
        "mean_nmi": 0.7325694893169156,
        "sd_nmi": 0.0479535479398297,
        "mean_ari": 0.5334263157556789,
        "sd_ari": 0.0919278531675153
      },
      {
        "pair_type": "SPECTER2-SPECTER2",
        "pairs": 1485,
        "mean_nmi": 0.7265230705102279,
        "sd_nmi": 0.0443389806498321,
        "mean_ari": 0.5415734225071074,
        "sd_ari": 0.0784334119566063
      },
      {
        "pair_type": "MiniLM-Reduced",
        "pairs": 108,
        "mean_nmi": 0.6295644587152416,
        "sd_nmi": 0.0243565571463498,
        "mean_ari": 0.156760989585351,
        "sd_ari": 0.0362129869743546
      },
      {
        "pair_type": "Reduced-SPECTER2",
        "pairs": 55,
        "mean_nmi": 0.5021205444318597,
        "sd_nmi": 0.0129709206807286,
        "mean_ari": 0.0941971879938911,
        "sd_ari": 0.0201509419292839
      },
      {
        "pair_type": "MiniLM-SPECTER2",
        "pairs": 5940,
        "mean_nmi": 0.4973056205215029,
        "sd_nmi": 0.0140298022449147,
        "mean_ari": 0.2208912003541802,
        "sd_ari": 0.0273683377095889
      },
      {
        "pair_type": "LDA-Reduced",
        "pairs": 1,
        "mean_nmi": 0.3996538726219953,
        "sd_nmi": null,
        "mean_ari": 0.2443274914000226,
        "sd_ari": null
      },
      {
        "pair_type": "LDA-MiniLM",
        "pairs": 108,
        "mean_nmi": 0.3383127876541634,
        "sd_nmi": 0.0094140370747735,
        "mean_ari": 0.0667776300470342,
        "sd_ari": 0.0161435512469801
      },
      {
        "pair_type": "LDA-SPECTER2",
        "pairs": 55,
        "mean_nmi": 0.3329077065193761,
        "sd_nmi": 0.0097842212264173,
        "mean_ari": 0.0526686053888691,
        "sd_ari": 0.0128329038328711
      }
    ]
  },
  "trajectory": {
    "trajectory_counts": [
      {
        "trajectory_type": "consistent decline",
        "n_topics": 19
      },
      {
        "trajectory_type": "consistent growth",
        "n_topics": 15
      },
      {
        "trajectory_type": "spike then reversal",
        "n_topics": 10
      },
      {
        "trajectory_type": "rebound",
        "n_topics": 4
      },
      {
        "trajectory_type": "early growth / plateau",
        "n_topics": 3
      },
      {
        "trajectory_type": "early decline / plateau",
        "n_topics": 2
      },
      {
        "trajectory_type": "late growth",
        "n_topics": 1
      },
      {
        "trajectory_type": "stable",
        "n_topics": 1
      },
      {
        "trajectory_type": "late decline",
        "n_topics": 1
      }
    ]
  }
};
