import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartStore } from "@/lib/cart.types";

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          if (item.quantity <= 0) return state;

          const existing = state.items.find(i => i.id === item.id);

          if (existing) {
            return {
              items: state.items.map(i =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          return { items: [...state.items, { ...item, selected: false }] };
        }),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map(i =>
            i.id === id ? { ...i, quantity } : i
          ),
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(i => i.id !== id),
        })),

      toggleSelect: (id) =>
        set((state) => ({
          items: state.items.map(i =>
            i.id === id ? { ...i, selected: !i.selected } : i
          ),
        })),

      selectAll: (selected) =>
        set((state) => ({
          items: state.items.map(i => ({ ...i, selected })),
        })),

      get totalItems() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      get subtotal() {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },

      get selectedTotal() {
        return get().items
          .filter(item => item.selected)
          .reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      // Backend sync methods  
      syncToDatabase: async () => {
        const items = get().items;
        if (typeof window !== 'undefined' && items.length > 0) {
          try {
            const { syncCartToDatabase } = await import('@/lib/actions/cart.actions');
            await syncCartToDatabase(items);
          } catch (error) {
            console.error('Sync failed:', error);
          }
        }
      },

      loadFromDatabase: async () => {
        if (typeof window !== 'undefined') {
          try {
            const { loadCartFromDatabase } = await import('@/lib/actions/cart.actions');
            const items = await loadCartFromDatabase();
            if (items && items.length > 0) {
              set({ items });
            }
          } catch (error) {
            console.error('Load failed:', error);
          }
        }
      },

      // Auto-sync wrapper methods
      addItemWithSync: async (item) => {
        get().addItem(item);
        await get().syncToDatabase();
      },

      updateQuantityWithSync: async (id, quantity) => {
        get().updateQuantity(id, quantity);
        await get().syncToDatabase();
      },

      removeItemWithSync: async (id) => {
        get().removeItem(id);
        await get().syncToDatabase();
      },
    }),
    {
      name: "cart-storage",
    }
  )
);