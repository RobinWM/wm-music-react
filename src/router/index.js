import { Redirect } from "react-router-dom";
import WMFriend from "@/pages/friend";
import WMMine from "@/pages/mine";

import WMDiscover from "@/pages/discover";
import WMRecommend from "@/pages/discover/c-pages/recommend";
import WMRanking from "@/pages/discover/c-pages/ranking";
import WMSonglist from "@/pages/discover/c-pages/songlist";
import WMDjradio from "@/pages/discover/c-pages/djradio";
import WMSinger from "@/pages/discover/c-pages/singer";
import WMAlbum from "@/pages/discover/c-pages/album";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: WMDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        exact: true,
        component: WMRecommend,
      },
      {
        path: "/discover/ranking",
        exact: true,
        component: WMRanking,
      },
      {
        path: "/discover/songlist",
        exact: true,
        component: WMSonglist,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: WMDjradio,
      },
      {
        path: "/discover/singer",
        exact: true,
        component: WMSinger,
      },
      {
        path: "/discover/album",
        exact: true,
        component: WMAlbum,
      },
    ],
  },
  {
    path: "/mine",
    exact: true,
    component: WMMine,
  },
  {
    path: "/friend",
    exact: true,
    component: WMFriend,
  },
];

export default routes;
