import { IntlProvider } from 'react-intl'
import { observer, useObservable } from '@legendapp/state/react'
import ReactCountryFlag from 'react-country-flag'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Outlet } from 'react-router'
import { translations } from '@/utils/app-utils'

export const DefaultLayout = observer(() => {
  const localeState$ = useObservable({ loc: 'en' })

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto p-6">
        <IntlProvider
          locale={localeState$.loc.get()}
          messages={translations[localeState$.loc.get()]}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-end mb-6">
              <Select defaultValue="en" onValueChange={(value) => localeState$.loc.set(value)}>
                <SelectTrigger className="w-[200px] bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-blue-500">
                  <SelectValue aria-label={localeState$.loc.get()} placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white shadow-lg rounded">
                  <SelectGroup>
                    <SelectItem
                      value="en"
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-700 focus:bg-gray-700"
                    >
                      <ReactCountryFlag
                        countryCode="GB"
                        svg
                        style={{
                          width: '1em',
                          height: '1em'
                        }}
                        title="GB"
                      />{' '}
                      English
                    </SelectItem>
                    <SelectItem
                      value="tr"
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-700 focus:bg-gray-700"
                    >
                      <ReactCountryFlag
                        countryCode="TR"
                        svg
                        style={{
                          width: '1em',
                          height: '1em'
                        }}
                        title="TR"
                      />{' '}
                      Türkçe
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Outlet />
          </div>
        </IntlProvider>
      </div>
    </div>
  )
})
