/** @jsx h */
import { h } from 'preact';
import './style.scss';
import {
  LeadershipCard,
  LeadershipCardProps,
} from '../LeadershipCard/LeadershipCard';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

import { BioContent } from './components/BioContent';
import { ModalData } from './types';

export function LeadershipGrid({
  leaders,
}: {
  leaders: LeadershipCardProps[];
}) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [modalData, setModalData] = useState<ModalData | null>(null);
  return (
    <div className="leadership__grid">
      {leaders.map((item: LeadershipCardProps, index: number) => (
        <LeadershipCard
          {...item}
          key={`leader-${index}`}
          onClick={(ev: h.JSX.TargetedMouseEvent<HTMLDivElement>) => {
            setShowModal(true);
            setModalData({
              name: item.name,
              image: item.image,
              title: item.title,
              tag: item.tag,
              favorites: item.favorites,
              body: item.body,
            });
          }}
        />
      ))}

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <BioContent data={modalData} />
      </Modal>
    </div>
  );
}
