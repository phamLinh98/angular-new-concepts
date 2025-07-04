import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  title: string = 'My Application Header';
  originalTitle: string = this.title;
  isOriginal: boolean = true;
  products: Product[] = [];  // Lưu trữ dữ liệu products

  constructor() {
    console.log('Header component initialized');
  }

  ngOnInit(): void {
    this.fetchProducts(); // Gọi hàm fetch khi component khởi tạo
  }

  toggleTitle(): void {
    if (this.isOriginal) {
      this.title = 'New Header Title';
    } else {
      this.title = this.originalTitle;
    }
    this.isOriginal = !this.isOriginal;
  }

  async fetchProducts(): Promise<void> {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.products = await response.json();
      console.log('Products fetched:', this.products); // Kiểm tra dữ liệu
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }
}