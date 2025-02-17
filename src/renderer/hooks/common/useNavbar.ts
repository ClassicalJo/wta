import { useLocation } from 'react-router';

export default function useNavBar() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const paths = [
    { to: '/', value: 'Home', isLast: location.pathname.length === 1 },
    ...pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join('/')}`;
      return {
        to,
        value,
      };
    }),
  ];
  return { paths };
}
