declare module '*.svg' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export { ReactComponent };
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}