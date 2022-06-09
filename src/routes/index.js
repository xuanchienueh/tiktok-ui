import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
  { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];
