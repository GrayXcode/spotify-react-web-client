export const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PLAYLIST_MENU_PENDING':
      return {
        fetchPlaylistsPending: true,
        ...state
      };

    case 'FETCH_PLAYLIST_MENU_SUCCESS':
      return {
        playlists: action.playlists,
        fetchPlaylistsError: false,
        fetchPlaylistsPending: false,
        ...state
      };

    case 'FETCH_PLAYLIST_MENU_ERROR':
      return {
        ...state,
        fetchPlaylistsError: true,
        fetchPlaylistsPending: false
      };
    case 'FETCH_PLAYLIST_PENDING':
      return {
        ...state,
        fetchPlaylistPending: true
      };

    case 'FETCH_PLAYLIST_SUCCESS':
      return {
        ...state,
        playlist: action.playlist,
        fetchPlaylistError: false,
        fetchPlaylistPending: false
      };

    case 'FETCH_PLAYLIST_ERROR':
      return {
        fetchPlaylistError: true,
        fetchPlaylistPending: false,
        ...state
      };

    default:
      return state;
  }
};

export default playlistReducer;
