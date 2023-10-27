import Image from 'next/image'


type Props = { title: string }

export const Thumbnail = ({ title }: Props) => {
    const createSVG = (text: string) => {
      return `
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <text x="50%" y="50%" font-family="Verdana" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="black">${text}</text>
        </svg>
      `;
    };

    const svgToDataURL = (svgString: string) => {
      const encoded = encodeURIComponent(svgString);
      return `data:image/svg+xml,${encoded}`;
    };

    const svgString = createSVG(title);
    const dataURL = svgToDataURL(svgString);
  return (
    <Image className='object-fill' src={dataURL} alt={title} width={1000} height={500}/>
  )
}

export default Thumbnail;