---
title: Contact
sections:
  - type: section_contact
    section_id: contact
    title: Kontakta oss
    content: >
      Vi återkommer så snart vi kan och notera att uppgifter endast används i
      syfte att hjälpa er, ingen tredje part tar del av dessa.
    background: gray
    form_id: contactForm
    form_fields:
      - type: form_field
        input_type: text
        name: name
        label: Namn
        is_required: true
      - type: form_field
        input_type: email
        name: email
        label: Epost
        is_required: true
      - type: form_field
        input_type: select
        name: subject
        label: Ärende
        default_value: Val
        options:
          - Intresserad av tjänsten
          - Intresserad av partnerskap
          - 'Övrigt '
      - type: form_field
        input_type: textarea
        name: message
        label: Meddelende
      - type: form_field
        input_type: checkbox
        name: consent
        label: >-
          Jag förstår att detta formulär sparar mina uppgifter så jag kan bli
          kontaktad
        is_required: true
    submit_label: Skicka
seo:
  type: stackbit_page_meta
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
template: landing
---
