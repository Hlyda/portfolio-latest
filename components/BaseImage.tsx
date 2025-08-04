// components/BaseImage.tsx
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

type BaseImageProps = Omit<ImageProps, 'src'> & {
    src: string;
};

export default function BaseImage({ src, ...rest }: BaseImageProps) {
    const { basePath } = useRouter();

    return <Image src={`${basePath}${src}`} {...rest} />;
}