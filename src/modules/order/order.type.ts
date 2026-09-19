export interface CreateOrderItemPayload {
    mealId: string,
    quantity: number;
    price: number;
}

export interface CreateOrderPayload {
    providerId: string;
    deliveryAddress: string;
    paymentMethod: string;
    items: CreateOrderItemPayload[];
}