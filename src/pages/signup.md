---
title: Beställ
sections:
  - section_id: orderSection
    title: Beställningsformulär
    content: |
      ### För samtliga standarderbjudanden gäller

      ##### Shop Analytics tjänst tillhandahålls av Anavid Frankrike

      ###### Bindingstid

      *   6 månaders bindningstid vid köp av abonemang

      *   Efter 6 månader gäller en 1 månads uppsägningstid

      ###### Faktura

      *   Fakturering sker lokalt med Svensk påförd moms (innehar F-skatt)

      *   Fakturering sker månadsvis, direkt efter debiterad månad
    background: gray
    form_id: orderForm
    hide_labels: false
    form_fields:
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
        options: []
        is_required: false
        type: form_field
        name: contact
        label: Kontakt
      - input_type: email
        label: E-post
        options: []
        is_required: true
        type: form_field
        name: email
      - input_type: text
        name: lorem-ipsum
        label: Telefon
        options: []
        is_required: false
        type: form_field
    type: section_contact
    submit_label: Beställ
seo:
  title: ''
  description: ''
  robots: []
  extra: []
  type: stackbit_page_meta
template: landing
---
