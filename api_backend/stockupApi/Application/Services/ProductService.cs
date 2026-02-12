using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace stockupApi.Application.Services
{
    public class ProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<ProductDto.ProductResponseDto> CreateProductAsync(ProductDto.ProductCreateDto product)
        {
            var existingProduct = await _productRepository.GetProductByNameAsync(product.Name);

            if (existingProduct != null)
                throw new Exception(" Produto com o mesmo nome encontrado. Por favor, escolha um nome diferente.");
            
            var createdProduct = await _productRepository.AddProductAsync(product);
            
        }
        public async Task<IEnumerable<ProductDto.ProductResponseDto>> GetAllProductsAsync()
        {
            var products = await _productRepository.GetAllProductsAsync();
            return products;
        }
        public async Task<ProductDto.ProductResponseDto> GetProductByIdAsync(Guid productId)
        {
            var product = await _productRepository.GetProductByIdAsync(productId);

            if (product == null)
                throw new Exception("Produto não encontrado.");  
            
                return product;
            
        }
        public async Task<ProductDto.ProductResponseDto> UpdateProductAsync(Guid productId, ProductDto.ProductUpdateDto product)
        {
            var checkdata = product.Price <= 0 ; 
            if (checkdata)
                throw new Exception("Preço deve ser maior que zero.");


            var updatedProduct = await _productRepository.UpdateProductAsync(productId, product);
            
        }
        public async Task<bool> DeleteProductAsync(Guid productId)
        {
            var result = await _productRepository.DeleteProductAsync(productId);
            return result;
             
        }
    }
}