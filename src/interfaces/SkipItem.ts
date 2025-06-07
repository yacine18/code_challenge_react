export interface SkipItem {
    id?: number | undefined;
    size: number;
    price_before_vat: number;
    hire_period_days: number;
    allowed_on_road: boolean;
    vat?: number;
    postcode?: string;
    area?: string;
    forbidden?: boolean;
    created_at: Date;
    updated_at?: Date;
    allows_heavy_waste?: boolean
}