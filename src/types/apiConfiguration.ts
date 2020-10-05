export interface IImageConfiguration {
  base_url: string | undefined;
  poster_sizes: string[];
}
export interface IApiConfiguration {
  images: IImageConfiguration;
}