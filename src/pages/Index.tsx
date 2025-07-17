import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'water',
      title: 'Ежи в воде',
      description: 'Редкие кадры ежей в водной среде',
      image: 'img/f938b2b6-881b-41d0-9302-ad80cdea1d7c.jpg',
      facts: [
        'Ежи умеют плавать, но делают это неохотно',
        'В воде они могут находиться до 30 минут',
        'Плавают стилем "собачка" благодаря коротким лапкам'
      ]
    },
    {
      id: 'forest',
      title: 'Ежи в лесу',
      description: 'Естественная среда обитания ежей',
      image: 'img/9b704bbf-02e6-4434-97a9-8cb79fe70c07.jpg',
      facts: [
        'Лес - основная среда обитания европейских ежей',
        'Активны в сумерки и ночью',
        'Строят гнезда из листьев и веток под корнями'
      ]
    },
    {
      id: 'home',
      title: 'Ежи дома',
      description: 'Домашние ежи в комфортных условиях',
      image: 'img/a72aada1-0e93-4bf1-9e76-8594cd8a3468.jpg',
      facts: [
        'Африканские карликовые ежи популярны как домашние питомцы',
        'Требуют температуру 22-26°C для комфорта',
        'Живут в неволе 3-8 лет при правильном уходе'
      ]
    },
    {
      id: 'cute',
      title: 'Милые ежи',
      description: 'Самые очаровательные моменты',
      image: 'img/a72aada1-0e93-4bf1-9e76-8594cd8a3468.jpg',
      facts: [
        'Ежата рождаются слепыми и без иголок',
        'Иголки начинают расти через 2-3 недели',
        'У взрослого ежа около 5000-7000 иголок'
      ]
    }
  ];

  const generalFacts = [
    {
      title: 'Анатомия',
      content: 'У ежей 36-44 зуба, отличное обоняние и слух, но слабое зрение'
    },
    {
      title: 'Поведение',
      content: 'При опасности сворачиваются в клубок благодаря специальным мышцам'
    },
    {
      title: 'Питание',
      content: 'Всеядны: насекомые, черви, улитки, яйца, фрукты и овощи'
    },
    {
      title: 'Размножение',
      content: 'Беременность длится 35 дней, рождается 3-8 детенышей'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#2C3E50] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold font-['Source_Sans_Pro'] mb-2">
                Галерея ежей
              </h1>
              <p className="text-lg text-gray-300">
                Образовательный проект о жизни ежей в различных условиях
              </p>
            </div>
            <Icon name="Camera" size={48} className="text-gray-400" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#34495E] text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6">
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              onClick={() => setSelectedCategory(null)}
              className="text-white hover:bg-[#2C3E50]"
            >
              Все категории
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.id)}
                className="text-white hover:bg-[#2C3E50]"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* General Facts Section */}
        {selectedCategory === null && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-['Source_Sans_Pro'] mb-8 text-[#2C3E50]">
              Научные факты о ежах
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {generalFacts.map((fact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg font-['Source_Sans_Pro'] text-[#2C3E50]">
                      {fact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {fact.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories
            .filter(category => selectedCategory === null || category.id === selectedCategory)
            .map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-[#2C3E50] text-white">
                    {category.title}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-['Source_Sans_Pro'] text-[#2C3E50]">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#34495E] text-sm mb-2">
                      Образовательные факты:
                    </h4>
                    {category.facts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="Info" size={16} className="text-[#2C3E50] mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {fact}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-4 bg-[#2C3E50] hover:bg-[#34495E] text-white"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Смотреть галерею
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Selected Category Details */}
        {selectedCategory && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-['Source_Sans_Pro'] text-[#2C3E50]">
                {categories.find(c => c.id === selectedCategory)?.title}
              </h2>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
                className="text-[#2C3E50] border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад к категориям
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={categories.find(c => c.id === selectedCategory)?.image}
                  alt={categories.find(c => c.id === selectedCategory)?.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-['Source_Sans_Pro'] text-[#34495E] mb-4">
                  Подробная информация
                </h3>
                <div className="space-y-3">
                  {categories.find(c => c.id === selectedCategory)?.facts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Icon name="BookOpen" size={18} className="text-[#2C3E50] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Галерея ежей. Образовательный проект о природе и животных.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;