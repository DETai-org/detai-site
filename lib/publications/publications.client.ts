import { basePublications } from "./publications.base";
import { Publication, PublicationType } from "./types";

export function getPublicationsByTypeClient(type: PublicationType): Publication[] {
  return basePublications.filter((publication) => publication.type === type);
}
