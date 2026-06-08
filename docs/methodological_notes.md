# Methodological notes for the final report

## Acceptance rate correction

Do not estimate topic-level acceptance rates from OpenReview public records. The denominator for a true topic-level acceptance rate is all submitted papers in that topic, including hidden rejected submissions. The pipeline therefore uses:

- global NeurIPS acceptance rate from external conference statistics only as context,
- accepted-paper share at topic level,
- oral/spotlight concentration among accepted papers.

## Main statistical analysis

The main unit is a topic. For each topic `c`:

```text
share_c,y = accepted_count_c,y / accepted_count_y
Delta_c = share_c,2025 - share_c,2023
rating_c = mean year-normalized reviewer score among accepted papers in c
prestige_c = (# oral + # spotlight in c) / # accepted in c
```

The main analysis is:

```text
Delta_c ~ rating_c + log(topic_size_c) + share_c,2023 + prestige_c
```

with HC3 robust standard errors.

## Qualitative validation

The representative-paper table is not just decoration. It directly addresses topic-model validity: each topic should have coherent keywords and recognizable papers that match the label.
