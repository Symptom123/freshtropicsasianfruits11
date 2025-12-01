import { ComparisonProduct, Fruit } from '@/types'

// Extended fruit data with nutrition and details
const FRUIT_DATABASE: ComparisonProduct[] = [
  {
    id: '1',
    name: 'Pink Glow Pineapple',
    category: 'exotic',
    price: 29.99,
    originalPrice: 34.99,
    image: '/hero/pinkglow.jpg',
    description: 'Bioengineered pink-fleshed pineapple with sweeter taste',
    rating: 4.8,
    reviews: 342,
    inStock: true,
    inventory: 45,
    nutrition: {
      calories: 82,
      protein: 0.9,
      carbs: 21.6,
      fiber: 1.3,
      vitaminC: 47.8,
      potassium: 180,
    },
    benefits: ['High in Vitamin C', 'Contains Bromelain', 'Anti-inflammatory', 'Aids digestion', 'Boosts immune system'],
    season: 'Year-round',
    shelfLife: '5-7 days',
    storage: 'Room temperature, then refrigerate',
    origin: 'Costa Rica',
  },
  {
    id: '2',
    name: 'Mango',
    category: 'tropical',
    price: 12.99,
    image: '/products/mango.jpg',
    description: 'Sweet, juicy tropical mango - King of fruits',
    rating: 4.6,
    reviews: 289,
    inStock: true,
    inventory: 120,
    nutrition: {
      calories: 60,
      protein: 0.8,
      carbs: 15,
      fiber: 1.6,
      vitaminC: 36.4,
      potassium: 168,
    },
    benefits: ['Rich in Vitamin A', 'Supports eye health', 'Contains antioxidants', 'Improves digestion', 'Anti-cancer properties'],
    season: 'May-September',
    shelfLife: '5-7 days',
    storage: 'Room temperature until ripe',
    origin: 'India',
  },
  {
    id: '3',
    name: 'Rambutan',
    category: 'exotic',
    price: 18.99,
    image: '/products/rambutan.jpg',
    description: 'Exotic spiky red fruit with sweet translucent flesh',
    rating: 4.4,
    reviews: 156,
    inStock: false,
    inventory: 0,
    nutrition: {
      calories: 82,
      protein: 1.3,
      carbs: 20.9,
      fiber: 0.9,
      vitaminC: 40,
      potassium: 195,
    },
    benefits: ['High in copper', 'Contains antioxidants', 'May boost immune system', 'Supports bone health', 'May improve digestion'],
    season: 'June-August',
    shelfLife: '3-4 days',
    storage: 'Refrigerate immediately',
    origin: 'Malaysia',
  },
  {
    id: '4',
    name: 'Dragon Fruit (Pitaya)',
    category: 'exotic',
    price: 15.99,
    image: '/products/dragonfruit.jpg',
    description: 'Vibrant pink fruit with tiny black seeds, mild sweet taste',
    rating: 4.5,
    reviews: 203,
    inStock: true,
    inventory: 35,
    nutrition: {
      calories: 60,
      protein: 1.2,
      carbs: 13,
      fiber: 3,
      vitaminC: 3.2,
      potassium: 287,
    },
    benefits: ['Very low calorie', 'High in fiber', 'Contains prebiotics', 'Supports gut health', 'Rich in antioxidants'],
    season: 'June-September',
    shelfLife: '3-5 days',
    storage: 'Refrigerate',
    origin: 'Vietnam',
  },
  {
    id: '5',
    name: 'Durian',
    category: 'exotic',
    price: 22.99,
    image: '/products/durian.jpg',
    description: 'The "King of Fruits" - creamy texture, pungent aroma',
    rating: 4.2,
    reviews: 89,
    inStock: true,
    inventory: 12,
    nutrition: {
      calories: 147,
      protein: 2.6,
      carbs: 27.1,
      fiber: 3.8,
      vitaminC: 19.7,
      potassium: 436,
    },
    benefits: ['Rich in minerals', 'High in healthy fats', 'Supports bone health', 'Boosts immunity', 'May improve digestion'],
    season: 'June-August',
    shelfLife: '2-3 days',
    storage: 'Refrigerate after opening',
    origin: 'Thailand',
  },
  {
    id: '6',
    name: 'Passion Fruit',
    category: 'tropical',
    price: 9.99,
    image: '/products/passionfruit.jpg',
    description: 'Tart and aromatic fruit with edible seeds and pulp',
    rating: 4.7,
    reviews: 167,
    inStock: true,
    inventory: 80,
    nutrition: {
      calories: 97,
      protein: 2.2,
      carbs: 23.4,
      fiber: 10.4,
      vitaminC: 30,
      potassium: 348,
    },
    benefits: ['Excellent source of fiber', 'Rich in Vitamin C', 'Contains antioxidants', 'Supports digestive health', 'May reduce anxiety'],
    season: 'Year-round',
    shelfLife: '5-7 days',
    storage: 'Room temperature or refrigerate',
    origin: 'Colombia',
  },
]

// Get comparison products
export function getComparisonProducts(): ComparisonProduct[] {
  return FRUIT_DATABASE
}

// Get product by ID
export function getComparisonProductById(id: string): ComparisonProduct | undefined {
  return FRUIT_DATABASE.find(p => p.id === id)
}

// Get products by IDs (for comparison list)
export function getProductsForComparison(ids: string[]): ComparisonProduct[] {
  return ids
    .map(id => FRUIT_DATABASE.find(p => p.id === id))
    .filter((p): p is ComparisonProduct => p !== undefined)
}

// Calculate price difference
export function calculatePriceDifference(price1: number, price2: number): number {
  return Math.round(((price2 - price1) / price1) * 100)
}

// Get nutrition comparison data
export function getNutritionComparison(productIds: string[]) {
  const products = getProductsForComparison(productIds)
  
  return {
    calories: products.map(p => ({ name: p.name, value: p.nutrition.calories })),
    protein: products.map(p => ({ name: p.name, value: p.nutrition.protein })),
    carbs: products.map(p => ({ name: p.name, value: p.nutrition.carbs })),
    fiber: products.map(p => ({ name: p.name, value: p.nutrition.fiber })),
    vitaminC: products.map(p => ({ name: p.name, value: p.nutrition.vitaminC })),
    potassium: products.map(p => ({ name: p.name, value: p.nutrition.potassium })),
  }
}

// Generate PDF comparison (mock)
export function generateComparisonPDF(productIds: string[]): string {
  const products = getProductsForComparison(productIds)
  
  let pdfContent = 'FRESH TROPICS PRODUCT COMPARISON\n\n'
  pdfContent += `Generated: ${new Date().toLocaleDateString()}\n\n`
  
  products.forEach((product, idx) => {
    pdfContent += `${idx + 1}. ${product.name}\n`
    pdfContent += `   Price: $${product.price}\n`
    pdfContent += `   Rating: ${product.rating}/5 (${product.reviews} reviews)\n`
    pdfContent += `   Origin: ${product.origin}\n`
    pdfContent += `   Benefits: ${product.benefits.join(', ')}\n\n`
  })
  
  // In production, use a library like jsPDF or pdfkit
  return 'data:text/plain;base64,' + btoa(pdfContent)
}

// Get similar products
export function getSimilarProducts(productId: string, limit = 4): ComparisonProduct[] {
  const product = getComparisonProductById(productId)
  if (!product) return []
  
  return FRUIT_DATABASE
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit)
}

// Price range for category
export function getPriceRange(category: string): { min: number; max: number } {
  const products = FRUIT_DATABASE.filter(p => p.category === category)
  if (products.length === 0) return { min: 0, max: 0 }
  
  const prices = products.map(p => p.price)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  }
}

// Top rated products
export function getTopRatedProducts(limit = 5): ComparisonProduct[] {
  return [...FRUIT_DATABASE]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}

// Best value products (rating / price ratio)
export function getBestValueProducts(limit = 5): ComparisonProduct[] {
  return [...FRUIT_DATABASE]
    .map(p => ({
      ...p,
      value: p.rating / (p.price / 10),
    }))
    .sort((a, b) => b.value - a.value)
    .map(({ value, ...p }) => p)
    .slice(0, limit)
}
