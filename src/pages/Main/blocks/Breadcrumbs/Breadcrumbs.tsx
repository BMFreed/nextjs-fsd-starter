import { Breadcrumbs as Breadcrumb, BreadcrumbItem } from '@nextui-org/react';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  breadcrumbs: IBreadcrumb[]
}

interface IBreadcrumb {
  name: string
  url: string
}

export const Breadcrumbs: FC<IProps> = ({ breadcrumbs }) => (
  <Breadcrumb separator="->">
    {breadcrumbs.map((breadcrumb, index) => (
      <BreadcrumbItem key={index}>
        <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
);
