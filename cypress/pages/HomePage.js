class HomePage{
    elements ={
        items: ()=> cy.get('.product-layout'),
        message: ()=> cy.get('.alert'),
        cartButton: ()=> cy.get('#cart-total')
    }

    clickAddToCartButton(index){
        this.elements.items().eq(index).find('.button-group [onclick*="cart.add"]').click()
    }
    
    successMessage(){
        return this.elements.message()
    }

    itemsCartButton(){
        return this.elements.cartButton()
    }

    clickAddToCartOnSpecificItem(index){
        this.elements.items().contains(index).parents('.product-layout').find('.button-group [onclick*="cart.add"]').click()
    } 
    //Esta fue la logica que encontre para que me encuentre el boton de añadir al carro. Esto es porque
    //cuando encuentro el index (iphone por ej), tengo que volver si o si al padre para encontrar el boton de añadir
    //sino me lo busca desde donde estoy parada (index)

 
}

module.exports = new HomePage();

