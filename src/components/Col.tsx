import React, { HTMLProps } from 'react';
import clsx from 'clsx';

type NumericSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Size = NumericSize | `${NumericSize}`;

export interface Props extends HTMLProps<HTMLDivElement> {
  readonly sizeSm?: Size;
  readonly sizeMd?: Size;
  readonly sizeLg?: Size;
  readonly sizeXl?: Size;
  readonly sizeXxl?: Size;
  readonly sizeXxxl?: Size;

  readonly smPush?: Size;
  readonly mdPush?: Size;
  readonly lgPush?: Size;
  readonly xlPush?: Size;
  readonly xxlPush?: Size;
  readonly xxxlPush?: Size;

  readonly smPull?: Size;
  readonly mdPull?: Size;
  readonly lgPull?: Size;
  readonly xlPull?: Size;
  readonly xxlPull?: Size;
  readonly xxxlPull?: Size;

  readonly hiddenSm?: boolean;
  readonly hiddenMd?: boolean;
  readonly hiddenMdDown?: boolean;
  readonly hiddenMdUp?: boolean;
  readonly hiddenLg?: boolean;
  readonly hiddenLgDown?: boolean;
  readonly hiddenLgUp?: boolean;
  readonly hiddenXl?: boolean;
  readonly hiddenXlDown?: boolean;
  readonly hiddenXlUp?: boolean;
  readonly hiddenXxl?: boolean;
  readonly hiddenXxlDown?: boolean;
  readonly hiddenXxlUp?: boolean;
  readonly hiddenXxxl?: boolean;
}

export const Col = ({
  children,
  className,

  sizeSm,
  sizeMd,
  sizeLg,
  sizeXl,
  sizeXxl,
  sizeXxxl,

  smPush,
  mdPush,
  lgPush,
  xlPush,
  xxlPush,
  xxxlPush,

  smPull,
  mdPull,
  lgPull,
  xlPull,
  xxlPull,
  xxxlPull,

  hiddenSm,
  hiddenMd,
  hiddenMdDown,
  hiddenMdUp,
  hiddenLg,
  hiddenLgDown,
  hiddenLgUp,
  hiddenXl,
  hiddenXlDown,
  hiddenXlUp,
  hiddenXxl,
  hiddenXxlDown,
  hiddenXxlUp,
  hiddenXxxl,

  ...props
}: Props) => (
  <div
    className={clsx(
      'ms-Grid-col',

      sizeSm && `ms-sm${sizeSm}`,
      sizeMd && `ms-md${sizeMd}`,
      sizeLg && `ms-lg${sizeLg}`,
      sizeXl && `ms-xl${sizeXl}`,
      sizeXxl && `ms-xxl${sizeXxl}`,
      sizeXxxl && `ms-xxl${sizeXxxl}`,

      smPush && `ms-sm${smPush}`,
      mdPush && `ms-md${mdPush}`,
      lgPush && `ms-lg${lgPush}`,
      xlPush && `ms-xl${xlPush}`,
      xxlPush && `ms-xxl${xxlPush}`,
      xxxlPush && `ms-xxl${xxxlPush}`,

      smPull && `ms-sm${smPull}`,
      mdPull && `ms-md${mdPull}`,
      lgPull && `ms-lg${lgPull}`,
      xlPull && `ms-xl${xlPull}`,
      xxlPull && `ms-xxl${xxlPull}`,
      xxxlPull && `ms-xxl${xxxlPull}`,

      hiddenSm && 'ms-hiddenSm',
      hiddenMd && 'ms-hiddenMd',
      hiddenMdDown && 'ms-hiddenMdDown',
      hiddenMdUp && 'ms-hiddenMdUp',
      hiddenLg && 'ms-hiddenLg',
      hiddenLgDown && 'ms-hiddenLgDown',
      hiddenLgUp && 'ms-hiddenLgUp',
      hiddenXl && 'ms-hiddenXl',
      hiddenXlDown && 'ms-hiddenXlDown',
      hiddenXlUp && 'ms-hiddenXlUp',
      hiddenXxl && 'ms-hiddenXxl',
      hiddenXxlDown && 'ms-hiddenXxlDown',
      hiddenXxlUp && 'ms-hiddenXxlUp',
      hiddenXxxl && 'ms-hiddenXxxl',

      className
    )}
    {...props}
  >
    {children}
  </div>
);
