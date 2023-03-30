<?php

namespace App\Http\Resources\CMS;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;


class SpecialSaleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $format = config('custom.date_format');
        return [
            'id' => $this->id,
            'display_price' => attachCurrencyDecimal($this->special_price),
            'price' => $this->converted_price,
            'currency' => $this->current_currency,
            'default_currency' => $this->default_currency,
            'default_currency_price' => $this->default_currency_price,
            'conversion_rate' => $this->currency_conversion_rate,
            'expire_date' => Carbon::parse($this->expire_date)->format($format),
            'is_active' => $this->is_active,
        ];
    }
}
