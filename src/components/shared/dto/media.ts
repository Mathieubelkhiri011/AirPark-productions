import { DayOfWeekEnums } from '@/components/shared/enums/DayOfWeekEnums'

export default class MediaDTO {
  constructor(
    idMedia,
    title,
    description,
    methodImport,
    base64,
    link,
    status,
    displayHomePage
  ) {
    this.idMedia = idMedia;
    this.title = title;
    this.description = description;
    this.methodImport = methodImport;
    this.base64 = base64;
    this.link = link;
    this.status = status;
    this.displayHomePage = displayHomePage;
  }
}

export function mapperMediaDTO(data) {
  if (!data || !Array.isArray(data)) {
    console.error('Données non valides ou absentes');
    return [];
  }
  return data.map((
    { idMedia, title, description, methodImport, base64, link, status, displayHomePage}
  ) => new MediaDTO(idMedia, title, description, methodImport, base64, link, status, displayHomePage));
}