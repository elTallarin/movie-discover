import { IApiConfiguration } from "../types/apiConfiguration";

export function getImageUrl(relativePath: string | undefined, apiConfiguration: IApiConfiguration): string {
  return (relativePath
  && apiConfiguration
  && apiConfiguration.images.base_url)
    ? `${apiConfiguration.images.base_url}w500${relativePath}`
    : 'http://placecorgi.com/500/750'
}