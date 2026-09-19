export interface CreateReviewPayload {
    mealId: string;
    rating: number;
    comment: string;
}

export interface UpdateReviewPayload {
    rating?: number;
    comment?: string;
} 