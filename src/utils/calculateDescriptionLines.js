export const calculateDescriptionLines = (title, genres) => {
  return Math.min(
    title?.length > 50 ? 1 : title?.length > 30 ? 3 : title?.length > 20 ? 4 : title?.length > 12 ? 5 : 6,
    genres?.join(', ').length > 50 ? 1 : genres?.join(', ').length > 30 ? 3 : genres?.join(', ').length > 20 ? 4 : genres?.join(', ').length > 12 ? 5 : 6,
    title?.length + (genres?.join(', ').length || 0) > 50 ? 1 : title?.length + (genres?.join(', ').length || 0) > 30 ? 2 : title?.length + (genres?.join(', ').length || 0) > 20 ? 3 : title?.length + (genres?.join(', ').length || 0) > 12 ? 3 : 6
  );
};
