import { BlueskyMediaAttachment } from "../../types";

/**
 * Creates a media record based on the given media type and attachments.
 *
 * @param {'image' | 'video' | 'card' | undefined} mediaType - The type of the media (image, video, or card).
 * @param {BlueskyMediaAttachment[]} mediaAttachments - The media attachments to include in the record.
 * @param {string} [cardLink] - The link associated with the card media.
 * @returns {Object} The media record object tailored to the media type.
 */
export const createMediaRecord = (
  mediaType: "image" | "video" | "card" | undefined,
  mediaAttachments: BlueskyMediaAttachment[],
  cardLink?: string
) => {
  switch (mediaType) {
    case "image":
      return {
        media: {
          $type: "app.bsky.embed.images",
          images: mediaAttachments.map((i) => ({
            alt: i.alt_text ?? "",
            image: i.data.blob.original,
          })),
        },
      };

    case "video":
      return {
        media: {
          $type: "app.bsky.embed.video",
          video: mediaAttachments[0].data.blob.original,
        },
      };

    case "card":
      if (!cardLink) return {};
      return {
        media: {
          $type: "app.bsky.embed.images",
          images: mediaAttachments.map((i) => ({
            alt: i.alt_text ?? "",
            image: i.data.blob.original,
          })),
        },
        text: `${cardLink}`,
      };

    default:
      return {};
  }
};
