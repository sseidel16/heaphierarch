import img001 from './assets/img001.jpg?as=meta';
import img002 from './assets/img002.jpg?as=meta';
import img003 from './assets/img003.jpg?as=meta';
import img004 from './assets/img004.jpg?as=meta';
import img005 from './assets/img005.jpg?as=meta';
import img006 from './assets/img006.jpg?as=meta';
import img007 from './assets/img007.jpg?as=meta';
import img008 from './assets/img008.jpg?as=meta';
import img009 from './assets/img009.jpg?as=meta';
import img010 from './assets/img010.jpg?as=meta';
import img011 from './assets/img011.jpg?as=meta';

export type ImageData = {
    src: string;
    width: number;
    height: number;
    focusX?: number;
    focusY?: number;
}

export const images: ImageData[] = [
    { src: img001.src, width: img001.width, height: img001.height, focusX: 612, focusY: 237 },
    { src: img002.src, width: img002.width, height: img002.height, focusX: 3475, focusY: 533 },
    { src: img003.src, width: img003.width, height: img003.height, focusX: 1054, focusY: 1019 },
    { src: img004.src, width: img004.width, height: img004.height, focusX: 554, focusY: 338 },
    { src: img005.src, width: img005.width, height: img005.height, focusX: 819, focusY: 657 },
    { src: img006.src, width: img006.width, height: img006.height, focusX: 3200, focusY: 1400 },
    { src: img007.src, width: img007.width, height: img007.height, focusX: 1150, focusY: 1185 },
    { src: img008.src, width: img008.width, height: img008.height, focusX: 700, focusY: 1300 },
    { src: img009.src, width: img009.width, height: img009.height, focusX: 3550, focusY: 1550 },
    { src: img010.src, width: img010.width, height: img010.height, focusX: 2569, focusY: 1843 },
    { src: img011.src, width: img011.width, height: img011.height, focusX: 1229, focusY: 1866 },
];
