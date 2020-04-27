import { PartType } from '../Enums/PartType';
import { CharacterImageMap } from './CharacterImageMap';

/**
 * A structure used to gather information about a character visually, then a means to fetch that character
 * data as an organized list of images.
 */
export class CharImageLayout {
    private ImageSelection: Map<PartType, string> = new Map();

    /**
     * @description Gets a new instance of this object.
     * @param partMap A map of part types to their respective strings. This may be an empty list.
     */
    public constructor(partMap: Map<PartType, string>) {
        this.ImageSelection = partMap;
    }

    /**
     * @description Sets the part type to the provided image.
     * @param partType The part type to set.
     * @param image The image source to set.
     */
    public SetPartImage(partType: PartType, image: string): void {
        this.ImageSelection.set(partType, image);
    }

    /**
     * @description Resets this image's parts to an empty list.
     */
    public ResetImage(): void {
        this.ImageSelection = new Map();
    }

    /**
     * @description Get a list of image sources, in-order.
     */
    public GetImages(): string[] {
        let images: string[] = [];
        
        CharacterImageMap.PartOrder.forEach(part => {
            this.EnlistImageIfExists(images, part);
        });

        return images;
    }

    /**
     * @description Adds the specified image by-part-type to the array if it exists in the @see ImageSelection
     * map.
     * @param images An output list of images, passed by-reference. This should be empty when first called.
     * @param partType The type of part to check-for and add to the list if it does.
     */
    private EnlistImageIfExists(images: string[], partType: PartType) {
        if (this.ImageSelection.has(partType)) {
            let image: string
            image = this.ImageSelection.get(partType) as string;
            images.push(image);
        }
    }
}
