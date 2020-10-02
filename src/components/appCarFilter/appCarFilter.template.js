export default ({ props, state }) =>/*html*/ `
    <div class="filter-wrapper">

        <div class="check-group">
            <div class="check-box">
                <app-check data-props="{'label':'Novos', 'type':'new'}"></app-check>
            </div>
            <div class="check-box">
                <app-check data-props="{'label':'Usados', 'type':'worn'}"></app-check>
            </div>        
        </div>
        <div class="grid">
            <div class="grid-2">
                <div class="place-box">
                    <app-place 
                        data-props="{
                            'inputDataKey':'value', 
                            'inputIcon':'las la-map-marker-alt',
                            'inputLabel':'Onde',
                            'listDataKey': 'place'
                        }"></app-place>
                </div>
                <div class="range-box">
                        <app-select 
                        data-props="{
                            'inputDataKey':'value', 
                            'inputLabel':'Raio',
                            'listDataKey': 'range'
                        }"></app-select>
                </div>
            </div>
            <div class="grid-4">
                    <app-brand 
                        data-props="{
                            'inputDataKey':'value', 
                            'inputLabel':'Marca',
                            'listDataKey': 'brand'
                        }">
                    </app-brand>
            </div>
            <div class="grid-4">
                    <app-model 
                        data-props="{
                            'inputDataKey':'value', 
                            'inputLabel':'Modelo',
                            'listDataKey': 'model'
                        }">
                    </app-model>
            </div>
        </div>
        <div class="grid">
            <div class="grid-2 no-gutter">
                <div class="grid">
                    <div class="grid-2 no-bottom-gutter">
                        <app-year 
                            data-props="{
                                'inputDataKey':'value', 
                                'inputLabel':'Ano desejado',
                                'listDataKey': 'year'
                            }">
                        </app-year>
                    </div>
                    <div class="grid-2 no-bottom-gutter">
                        <app-range-price 
                            data-props="{
                                'inputDataKey':'value', 
                                'inputLabel':'Faixa de preço',
                                'listDataKey': 'priceRange'
                            }">
                        </app-range-price>
                    </div>                   
                </div>         
            </div>

            <div class="grid-2 no-bottom-gutter">
                <app-version 
                    data-props="{
                        'inputDataKey':'value', 
                        'inputLabel':'Versão',
                        'listDataKey': 'version'
                    }">
                </app-version>
            </div>
        </div>
        <div class="grid">
            <div class="grid-2">
                <app-super-filter></app-super-filter>
            </div>
			<div class="grid-2">
				<div class="clear-box">
					<app-clear></app-clear>
				</div>
				<div class="exec-box">
					<app-exec-filter></app-exec-filter>
				</div>
			</div>
        </div>
    </div>
`