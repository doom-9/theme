export interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   *
   * @default true
   */
  appearance?: boolean

  /**
   * The path to the logo file.
   *
   * @example `'/img/logo.svg'`
   */
  logo?: string

  /**
   * The path to the dark mode logo file. If it's undefined, still `logo` file
   * will be used in dark mode. If `logo` undefined, the option will be
   * ignored as well.
   *
   * @example `'/img/logo-dark.svg'`
   */
  logoDark?: string

  /**
   * The title text to be displayed on the navbar. If `logo` is set, the title
   * will be displayed right next to the logo. Set `null` to disable.
   *
   * @default 'VitePress Site'
   */
  title?: string | null

  /**
   * Algolia configuration for the site search.
   */
  algolia?: AlgoliaSearchOptions
}

// partially copied from @docsearch/react/dist/esm/DocSearch.d.ts
export interface AlgoliaSearchOptions {
  appId?: string
  apiKey: string
  indexName: string
  placeholder?: string
  searchParameters?: any
  disableUserPersonalization?: boolean
  initialQuery?: string
}
