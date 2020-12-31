const provinces = [
    { id: 1, name: 'Hà Nội' },
    { id: 2, name: 'Hà Giang' },
    { id: 3, name: 'Cao Bằng' }
  ]
  
  const districts = [
    // Hà Nội
    { id: 1, name: 'Quận Ba Đình' , provinceId: 1 },
    { id: 2, name: 'Quận Hoàn Kiếm' , provinceId: 1 },
  
    // Hà Giang
    { id: 7, name: 'Huyện Đồng Văn' , provinceId: 2 },
  
    // Cao Bằng
    { id: 10, name: 'Huyện Bảo Lâm' , provinceId: 3 },
    { id: 11, name: 'Huyện Bảo Lạc' , provinceId: 3 }
  ]
  
  
  const wards = [
    // Ba Đình
    { id: 1, name: 'Phường Phúc Xá', districtId: 1 },
    { id: 2, name: 'Phường Trúc Bạch', districtId: 1 },
    { id: 3, name: 'Phường Vĩnh Phúc', districtId: 1 },
    { id: 4, name: 'Phường Cống Vị', districtId: 1 },
    { id: 5, name: 'Phường Liễu Giai', districtId: 1 },
    { id: 6, name: 'Phường Nguyễn Trung Trực', districtId: 1 },
  
    // Hoàn  Kiếm
    { id: 7, name: 'Phường Phúc Tân', districtId: 2 },
    { id: 8, name: 'Phường Đồng Xuân', districtId: 2 },
    { id: 9, name: 'Phường Hàng Mã', districtId: 2 },
  
    // Đồng Văn
    { id: 10, name: 'Thị trấn Phó Bảng', districtId: 7 },
    { id: 11, name: 'Xã Lũng Cú', districtId: 7 },
    { id: 12, name: 'Xã Má Lé', districtId: 7 },
    { id: 13, name: 'Thị trấn Đồng Văn', districtId: 7 },
  
    // Bảo Lâm
    { id: 14, name: 'Xã Đức Hạnh', districtId: 10 },
    { id: 15, name: 'Xã Lý Bôn', districtId: 10 },
  
    // Bảo Lạc
    { id: 16, name: 'Xã Cốc Pàng', districtId: 11 },
    { id: 17, name: 'Xã Thượng Hà', districtId: 11 },
    { id: 18, name: 'Xã Cô Ba', districtId: 11 },
  ]

  module.exports = () => {
    const data = { provinces: provinces, districts: districts, wards: wards }

    return data
  }