import { LoadingContainer } from './loading.styles';

interface LoadingProps {
  title: string;
}

export const Loading: React.FC<LoadingProps> = ({ title }) => {
  return (
    <LoadingContainer>
      <i className="fa fa-spinner fa-pulse fa-4x fa-fw"></i>
      <p>{title}</p>
    </LoadingContainer>
  );
};
