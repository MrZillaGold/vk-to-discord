import { AttachmentTypeString } from "vk-io";

type AttachmentType = AttachmentTypeString | "album";

export type Attachment = {
    [key in AttachmentType]: any;
} & {
    type: AttachmentType;
};

export interface PoppedPhotoAttachment {
    url: string
}