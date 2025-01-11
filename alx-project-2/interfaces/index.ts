export interface CardProps{
  title: string;
  content: string;
}


export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}