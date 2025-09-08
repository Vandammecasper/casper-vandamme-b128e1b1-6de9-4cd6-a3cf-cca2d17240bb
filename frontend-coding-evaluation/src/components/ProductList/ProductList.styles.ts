export default {
  container: 'grid grid-cols-1 gap-6 sm:grid-cols-2',
  card: {
    container: 'bg-white rounded-lg shadow p-6',
    image: {
      wrapper: 'aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg ',
      image: 'h-48 w-full object-contain',
    },
    content: 'mt-4',
    title: 'text-sm font-medium text-gray-900',
    description: 'mt-1 text-sm text-gray-500',
    priceContainer: 'mt-4 flex items-center justify-between',
    price: 'text-lg font-medium text-gray-900',
    button: 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700',
  },
};
