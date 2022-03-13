import { Injectable, AfterContentInit, OnInit, Directive } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import authors from '../../data/team.json';
import blog from '../../data/blog/blog.json';
import blogcategory from '../../data/category.json';
import blogtags from '../../data/tags.json';

@Injectable({
  providedIn: 'root'
})
@Directive({})
export class BlogHelperService implements AfterContentInit, OnInit {

  // pagination
  page: number = 1;
  // Blog
  public blogblock = blog;
  public blogdetails = blog;
  // Category
  public category = blogcategory;
  public blogcategory = blogcategory;
  // Tags
  public tags = blogtags;
  public blogtags = blogtags;
  // Authors
  public author = authors;
  // Extra
  public searchText: string;
  public searchQuery: string;
  constructor(private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.searchText = '';
    this.searchQuery = '';
  }
  // Category
  public getCategories(items: string | any[]) {
    var elems = blogcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Tags
  public getTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fab fa-facebook-f",
        iconStyle: "fb",
        postnumber: 500,
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fab fa-twitter",
        iconStyle: "tw",
        postnumber: 20,
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fab fa-linkedin-in",
        iconStyle: "fb",
        postnumber: 46,
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      }
    ];
    return socialIcons;
  }
  openSocialPopup(social: any) {
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
  // Count Category
  public setCategoriesCount() {
    for (var i = 0; i < this.blogcategory.length; i++) {
      var count = this.blogblock.filter((post: { category: number[]; }) => { return post.category.includes(parseInt(this.blogcategory[i].id)) });
      count = count.length;
      this.blogcategory[i].count = count;
    }
  }
  // Related post
  public getPostByCategory(items: string | any[]) {
    var elems = blog.filter((post: { id: string; category: any[]; }) => { return parseInt(post.id) !== parseInt(this.route.snapshot.params.id) && post.category.some(r => items.includes(r)) });
    return elems;
  }
  // Post Details
  public setPost(id: any) {
    this.blogdetails = blog.filter((item: { id: any; }) => { return item.id == id });
  }
  // sanitize url
  public sanitnizeAudioURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  // Recent post
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }
  public setDemoDate() {
    var today = new Date();
    this.blogblock.slice(0, 4).map((post: { timestamp: number; postdate: string; }) => (
      post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the blog.json object
      post.postdate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth()).slice(0, 3)}, ${today.getFullYear()}`
    ));
  }
  public getRecentPost(): any[] {
    var elems = blog.filter((post: { timestamp: number | any; postdate: string | number | Date; }) => {
      return post.timestamp < new Date(post.postdate);
    });
    return elems;
  }
  // Get Date
  public getDateInitials(string: string) {
    var names = string.split(' '),
      initials = '<div class="text-custom-white fw-600 date bg-custom-blue">' + names[0].substring(0, 2) + '</div>';

    if (names.length > 2) {
      initials += '<div class="text-custom-white year">' + names[names.length - 2].substring(0, 3).toUpperCase() + " 2021" + '</div>';
    }
    return initials;
  }
  // Search Filter
  onSubmit() {
    if (this.searchText === "") {
      return;
    } else {
      this.router.navigate(['blog/search', this.searchText]);
    }
  }
  // Filter 
  // Category Filter
  public setCategory(id: any) {
    this.blogcategory = id;
  }
  public getCategory() {
    return this.blogcategory;
  }
  public getPostsByCategory(catId: string) {
    return this.blogblock = blog.filter((item: { category: number[]; }) => { return item.category.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.blogtags = id;
  }
  public getTag() {
    return this.blogtags;
  }
  public getPostsByTags(tagId: string) {
    return this.blogblock = blog.filter((item: { tags: number[]; }) => { return item.tags.includes(parseInt(tagId)) });
  }
  // Author Filter
  public setAuthor(id: any) {
    this.author = id;
  }
  public getAuthorPost() {
    return this.author;
  }
  public getPostsByAuthors(authorId: string) {
    return this.blogblock = blog.filter((item: { author: number[]; }) => { return item.author.includes(parseInt(authorId)) });
  }
  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    return this.blogblock = blog.filter((item: { title: (string) }) => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    });
  }
  // Fetch All filter
  public setPosts() {
    var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '',
      postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '',
      postsByAuthor = this.getAuthorPost() != undefined ? this.getPostsByAuthors(this.getAuthorPost()) : '',
      postsBySearch = this.getSearch() != undefined ? this.getPostsBySearch(this.getSearch()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.blogblock = postsByCategory;
    } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.blogblock = postsByTags;
    } else if ((postsByAuthor != '' || postsByAuthor != undefined || postsByAuthor != null) && postsByAuthor.length > 0) {
      this.blogblock = postsByAuthor;
    } else if ((postsBySearch != '' || postsBySearch != undefined || postsBySearch != null) && postsBySearch.length > 0) {
      this.blogblock = postsBySearch;
    }
  }
  ngAfterContentInit(): void {
    this.setCategory(this.route.snapshot.params.catId);
    this.setTag(this.route.snapshot.params.tagId);
    this.setAuthor(this.route.snapshot.params.authorId);
    this.setSearch(this.route.snapshot.params.query);
    this.setPosts();
    this.setPost(this.route.snapshot.params.id);
  }
  ngOnInit(): void {
    this.setCategoriesCount();
    this.setDemoDate();
  }
  // Post Navigation
  public getPostNavigation(items: string | any[], index: number) {
    var output = [],
      id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
      item = items[index - 1];
      id = item.id;
      // Show the previous button 
      output.push("<li class='page-item'><a class='page-link' " + RouterLink + "/blog-details/" + item.id + "'>Previous</a></li>");
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
      // Show next button 
      item = items[index + 1];
      id = item.id;
      output.push("<li class='page-item'><a class='page-link' " + RouterLink + "/blog-details/" + item.id + "'>Next</a></li>");
    }
    return output;
  }
}
