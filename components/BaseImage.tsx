// components/BaseImage.tsx
import Image, { ImageProps } from 'next/image'

type BaseImageProps = Omit<ImageProps, 'src'> & {
    src: string;
};

export default function BaseImage({ src, ...rest }: BaseImageProps) {
    const repoBasePath = '/portfolio-latest'
    return <Image src={`${repoBasePath}${src}`} {...rest} />;
}
