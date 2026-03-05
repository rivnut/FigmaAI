import figma from '@figma/code-connect/react'

figma.connect(Button, 'https://...', {
  props: {
    label: figma.string('Text Content'),
    disabled: figma.boolean('Disabled'),
    type: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Text: 'text'
    }),
  },
  example: ({ disabled, label, type }) => {
    return (
      <Button disabled={disabled} type={type}>
        {label}
      </Button>
    )
  },
})