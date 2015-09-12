import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('home', '/',
    route('SearchCantique'),
    route('Cantiques'),
    route('CantiquePage', '/CantiquePage/:id')
));
