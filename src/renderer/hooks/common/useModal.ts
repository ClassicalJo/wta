import { useRef } from 'react';

export function useModal() {
  const ref = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    if (ref.current instanceof HTMLDialogElement) {
      ref.current.showModal();
    }
  };
  const closeModal = () => {
    if (ref.current instanceof HTMLDialogElement) {
      ref.current.close();
    }
  };

  return { ref, openModal, closeModal };
}
