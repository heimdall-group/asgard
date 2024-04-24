import { defineEventHandler } from 'h3'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[]
  return contentList
    .filter(c => c._path.startsWith('_articles'))
    .map((c) => {
      return asSitemapUrl({
        loc: `/blog/${c._path.replace('_articles', '')}`,
        lastmod: updatedAt
      })
    })
})