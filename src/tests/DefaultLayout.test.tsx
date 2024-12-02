import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router'
import { IntlProvider } from 'react-intl'
import { translations } from '@/utils/app-utils'
import { DefaultLayout } from '@/containers/layout/default-layout'

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router')
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet-content">Outlet Content</div>
  }
})

describe('DefaultLayout Component', () => {
  it('renders the language selector with default language', () => {
    render(
      <MemoryRouter>
        <DefaultLayout />
      </MemoryRouter>
    )

    const languageTrigger = screen.getByRole('combobox')
    expect(languageTrigger).toBeInTheDocument()
    expect(languageTrigger).toHaveTextContent('English')
  })

  it('changes language when a different option is selected', async () => {
    render(
      <MemoryRouter>
        <DefaultLayout />
      </MemoryRouter>
    )

    const languageTrigger = screen.getByRole('combobox')
    fireEvent.click(languageTrigger)

    const turkishOption = screen.getByText('Türkçe')
    fireEvent.click(turkishOption)

    expect(languageTrigger).toHaveTextContent('Türkçe')
  })

  it('renders Outlet content correctly', () => {
    render(
      <IntlProvider locale="en" messages={translations['en']}>
        <MemoryRouter>
          <DefaultLayout />
        </MemoryRouter>
      </IntlProvider>
    )

    const outletContent = screen.getByTestId('outlet-content')
    expect(outletContent).toBeInTheDocument()
    expect(outletContent).toHaveTextContent('Outlet Content')
  })
})
