import { PartType } from '../Enums/PartType';
import { BodyType } from '../Enums/BodyType';

type CharImageObject = {
    imageSelection: [PartType, string][],
    bodyType: BodyType
}

/**
 * A structure used to gather information about a character visually, then a means to fetch that character
 * data as an organized list of images.
 */
export class CharImageLayout {
    public static GetLayoutFromString(objString: string) {
        let obj: CharImageObject = JSON.parse(objString) as CharImageObject;
        let partMap: Map<PartType, string> = new Map(obj.imageSelection);
        let charLayout: CharImageLayout = new CharImageLayout(partMap, obj.bodyType);

        return charLayout;
    }

    /**
     * @description A list of all parts that are available as options for the user to select. This also 
     * determines the order in which parts will be rendered, from back-to-front, read top-to-bottom.
     */
    public static readonly PartOrder: PartType[] = [
        PartType.BackAccessory,
        PartType.Body,
        PartType.Bottoms,
        PartType.Shoes,
        PartType.LowerArmor,
        PartType.Tops,
        PartType.UpperArmor,
        PartType.MidAccessory,
        PartType.ArmArmor,
        PartType.HandWear,
        PartType.Hair,
        PartType.FacialWear,
        PartType.HeadWear,
        PartType.Pets,
        PartType.Weapons,
        PartType.Eyes
    ];

    private _imageSelection: Map<PartType, string> = new Map();
    private _bodyType: BodyType;

    public get ImageSelection(): Map<PartType, string> {
        return this._imageSelection;
    }

    public get BodyType(): BodyType {
        return this._bodyType;
    }

    /**
     * @description Gets a new instance of this object.
     * @param partMap A map of part types to their respective strings. This may be an empty list.
     */
    public constructor(partMap: Map<PartType, string>, bodyType: BodyType) {
        this._bodyType = bodyType;
        this._imageSelection = partMap;
    }

    /**
     * @description Sets the part type to the provided image.
     * @param partType The part type to set.
     * @param image The image source to set.
     */
    public SetPartImage(partType: PartType, image: string): void {
        this._imageSelection.set(partType, image);
    }

    /**
     * @description Resets this image's parts to an empty list.
     */
    public ResetImage(): void {
        this._imageSelection = new Map();
    }

    /**
     * @description Get a list of image sources, in-order.
     */
    public GetImages(): string[] {
        let images: string[] = [];
        
        CharImageLayout.PartOrder.forEach(part => {
            this.EnlistImageIfExists(images, part);
        });

        return images;
    }

    public GetJsonString(): string {
        let images: [PartType, string][] = Array.from(this._imageSelection);
        let objectToStringify: CharImageObject = {
            imageSelection: images,
            bodyType: this._bodyType
        }

        let objString: string = JSON.stringify(objectToStringify);
        return objString;
    }

    /**
     * @description Adds the specified image by-part-type to the array if it exists in the @see ImageSelection
     * map.
     * @param images An output list of images, passed by-reference. This should be empty when first called.
     * @param partType The type of part to check-for and add to the list if it does.
     */
    private EnlistImageIfExists(images: string[], partType: PartType) {
        if (this._imageSelection.has(partType)) {
            let image: string
            image = this._imageSelection.get(partType) as string;
            images.push(image);
        }
    }
}
