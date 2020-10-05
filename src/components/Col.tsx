import React, { HTMLProps } from 'react';
import cn from 'classnames';

interface Props extends HTMLProps<HTMLDivElement> {
  readonly sizeSm?: number;
  readonly sizeMd?: number;
  readonly sizeLg?: number;
  readonly sizeXl?: number;
  readonly sizeXxl?: number;
  readonly sizeXxxl?: number;

  readonly smPush?: number;
  readonly mdPush?: number;
  readonly lgPush?: number;
  readonly xlPush?: number;
  readonly xxlPush?: number;
  readonly xxxlPush?: number;

  readonly smPull?: number;
  readonly mdPull?: number;
  readonly lgPull?: number;
  readonly xlPull?: number;
  readonly xxlPull?: number;
  readonly xxxlPull?: number;

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
    {...props}
    className={cn(
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
  >
    {children}
  </div>
);
