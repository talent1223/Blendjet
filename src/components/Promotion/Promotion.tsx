/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from 'preact';
import './style.scss';

export interface SaleData {
  title: string;
  pill1: string;
  pill2?: string;
  pill3?: string;
  simple1: string;
  simple2: string;
}

export interface PromotionProps {
  productType: string;
  saleData: SaleData;
}

export function Promotion({ productType, saleData }: PromotionProps) {
  if (productType === 'BlendJet' || productType === 'JetSetter') {
    return (
      <div class="outer-canvas-bfcm" style="margin-bottom: unset;">
        <div class="canvas-bfcm">
          <div class="col-bfcm">
            <span class="entry-title-bfcm">{saleData.title}</span>
            <span class="content-split-element-bfcm">{saleData.pill1}</span>
            {saleData.pill2 ? (
              <span class="content-split-element-bfcm">{saleData.pill2}</span>
            ) : null}
            {saleData.pill2 ? (
              <span class="content-split-element-bfcm">{saleData.pill3}</span>
            ) : null}
            <span class="simple-text-bfcm">
              {saleData.simple1} <b class="b-hide-bfcm">|</b>{' '}
              <span>{saleData.simple2}</span>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
