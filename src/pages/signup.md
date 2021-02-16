---
title: Beställ
sections:
  - section_id: orderSection
    title: Beställ
    subtitle: Beställ
    content: >-
      ## Lorem ipsum


      Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.


      - Lorem ipsum

      - dolor sit amet
    background: gray
    form_id: orderForm
    hide_labels: false
    form_fields:
      - input_type: text
        options: []
        is_required: false
        type: form_field
        name: contact
        label: Kontakt
      - input_type: text
        name: company
        label: Företag
        options: []
        is_required: true
        type: form_field
      - input_type: select
        label: Erbjudande
        options:
          - Basic
          - Professional
        is_required: true
        type: form_field
        name: offering
      - input_type: text
        name: lorem-ipsum
        label: lorem-ipsum
        default_value: lorem-ipsum
        options: []
        is_required: false
        type: form_field
    submit_label: lorem-ipsum
    type: section_contact
seo:
  title: ''
  description: ''
  robots: []
  extra: []
  type: stackbit_page_meta
template: landing
---
